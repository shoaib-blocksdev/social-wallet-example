import {ReactNode, useEffect, useState} from "react";
import BalanceContext from "./BalanceContext.ts";
import { useWallet } from "cloud-social-wallet";
import {DENOM} from "../Contants.ts";

function BalanceProvider({children}: { children: ReactNode }) {
    const {address, client} = useWallet()
    const [balance, setBalance] = useState(0)
    
    const getBalance = async () => {
        // @ts-ignore
        const balance = await client?.getBalance(address, DENOM)
        setBalance(balance.amount/1000000)
    }
    console.log("balance.amount", balance)

    useEffect(() => {
        (client && balance <= 0) && getBalance()
    }, [address, client])

    useEffect(() => {
    const interval  = setInterval(getBalance,5000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    return (
        <BalanceContext.Provider value={{balance, refetch: getBalance}}>
            {children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider