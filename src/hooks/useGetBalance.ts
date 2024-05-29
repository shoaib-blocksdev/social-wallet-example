import {useWallet} from "cloud-social-wallet"
import {useEffect, useState} from "react"


const useGetBalance = (token?: string) => {
    const {address, client} = useWallet()
    const [loading,setLoading] = useState(false)
    const [balance, setBalance] = useState(0)

    const getBalance = async () => {
        setLoading(true);
        try {
            if (client && address) {
                if(token?.startsWith('u')){
                    // @ts-ignore
                    const bal = await client?.getBalance(address, token)
                    setBalance(bal.amount / 1000000)
                }else{
                    // @ts-ignore
                    const bal = await client?.getBalance(address, token)
                    setBalance(bal.amount / 1000000)
                }
            }
        } catch (e) {
            setBalance(0)
        }
    }

    useEffect(() => {
        balance <= 0 && getBalance()?.finally(()=>{
            setLoading(false);
        })
    }, [address, client])

    return {balance, refetch: getBalance, loading}
}

export default useGetBalance