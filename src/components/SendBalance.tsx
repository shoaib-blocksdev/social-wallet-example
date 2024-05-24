import {useEffect, useState} from "react"
import {calculateFee, coin, GasPrice} from "@cosmjs/stargate"
import Button from "./Button";
import {copyToClipboard} from "../lib/utils"
import styles from './SendBalance.module.scss'
import classNames from "classnames"
import {toast} from "react-toastify";
import { useWallet } from "cloud-social-wallet";
import { DENOM } from "../Contants";

const SendBalance = ({setVisibility}:{setVisibility: any}) => {
    const {address, client} = useWallet()
    const [loading, setLoading] = useState(false)
    const [recipient, setRecipient] = useState('')
    const [amount, setAmount] = useState<string | number>()
    const [tx, setTx] = useState<any>({})
    const [error, setError] = useState(undefined)

    const [balance, setBalance] = useState(0)
    const getBalance = async () => {
        // @ts-ignore
        const balance = await client?.getBalance(address, DENOM)
        setBalance(balance.amount/1000000)
    }

    useEffect(() => {
        (client && balance <= 0) && getBalance()
    }, [address, client])

    useEffect(() => {
       const interval  = setInterval(getBalance,5000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    console.log("client", client, address)
    const send = async () => {
        setLoading(true)
        setError(undefined)
        setTx({})
//        const msg = {
//            transfer: {
//                recipient: recipient, amount: `${Number(amount) * 1000000}`,
//            }
//        }
        const gasPrice = GasPrice.fromString("0.03"+DENOM);
        const txFee = calculateFee(2000000, gasPrice);
        try{
            // let tx = await client.execute(address,token, msg, txFee, "Transfer Funds to Wallet")
            // @ts-ignore
            let tx = await client?.sendTokens(
                address,
                recipient,
                [coin(Number(amount)*1000000, DENOM)],
                txFee,
                "Successfully Transferred"
            );
            console.log(tx);
            setTx(tx)
            setError(undefined)
            toast.success('Successfully Transferred')
        }catch (e:any){
            setTx({})
            const msg = e.message.substring(e.message.indexOf("failed to execute message;"))?.substring(0, 800);
            console.error("e",e.message)
            toast.error(msg)
            setError(msg)
        }
        setLoading(false)
    }
    const invalid = Number(amount) > balance
    const disable = !client || !address || loading || recipient.length <= 0 || Number(amount) <= 0 || invalid

    return <div className="sendBalance">
        <h1>Send</h1>
        <small className={"small"} onClick={() => copyToClipboard(DENOM)}>{DENOM}</small>
        <label >Recipient:</label>
        <input type={"text"} value={recipient} onChange={(e) => setRecipient(e.target.value)}
               placeholder={'Recipient'}/>
        <div className={styles.amountLabel}>
            <label>Amount:</label>
            <small onClick={() => setAmount(balance-0.5)}>{balance.toFixed(6)} {DENOM}</small>
        </div>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={'Amount'}/>
        {
            invalid && <small className={styles.error}>insufficient balance</small>
        }
        <div className="sendBalancebuttons">
            <Button className={classNames(styles.submit, disable ? styles.disabled : '')} type={'button'} onClick={send}
                    disabled={disable}>{loading ? "Sending..." : "Send"}
            </Button>
            <Button className={styles.close} outline type={'button'} onClick={() => setVisibility('main')}>close</Button>
        </div>
        <div className={"error"}>
            {
                error && <small>{error}</small>
            }
        </div>
        <div  className={"msg"}>
            {
                !error && (Object.keys(tx).length && tx?.transactionHash) ? <small>Successfully Transferred</small> : null
            }
        </div>
    </div>
}

export default SendBalance