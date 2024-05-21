import {useState} from 'react';
import './App.css'
import {useWallet} from "cloud-social-wallet";
import { Tooltip } from 'react-tooltip'

function App() {
    return <WalletApp/>
}

function WalletApp() {
    const [copied, setCopied] = useState(false)
    const {address, logout, login} = useWallet()
    const copyToClipboad = () =>{
        navigator.clipboard.writeText(address)
        setCopied(true);
    }

    return (
        <>
            <h1>Cloud wallet example</h1>
            {
                address ? <>
                    <Tooltip id="tooltip-anchor-hide" />
                    <button
                        data-tooltip-id="tooltip-anchor-hide"
                        data-tooltip-content={copied ? "Copied" : 'Click to copy'}
                        data-tooltip-delay-hide={500}
                        onBlur={()=> setCopied(false)}
                        onClick={copyToClipboad}>{address}</button>
                    <button onClick={logout}>Disconnect</button>
                </> : <>
                    <button onClick={() => login('google')}>Google Login</button>
                    {/*<button onClick={() => login('facebook')}>Facebook Login</button>*/}
                </>
            }
        </>
    )
}

export default App
