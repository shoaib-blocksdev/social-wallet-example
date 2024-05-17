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
                    <p onClick={logout}>Disconnect</p>
                </> : <>
                    <p onClick={() => login('google')}>Google Login</p>
                    {/*<p onClick={() => login('facebook')}>Facebook Login</p>*/}
                </>
            }
        </>
    )
}

export default App
