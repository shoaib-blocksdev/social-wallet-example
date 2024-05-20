import './App.css'
import {useWallet} from "cloud-social-wallet";

function App() {
    return <WalletApp/>
}

function WalletApp() {
    const {address, logout, login} = useWallet()
    return (
        <>
            <h1>Cloud wallet example</h1>
            {
                address ? <>
                    <p>{address}</p>
                    <button onClick={logout}>Disconnect</button>
                </> : <>
                    <button onClick={() => login('google')}>Google Login</button>
                    {/*<p onClick={() => login('facebook')}>Facebook Login</p>*/}
                </>
            }
        </>
    )
}

export default App
