# Cloud Social Wallet example

Usage:
```js
npm install cloud-social-wallet
```

```js
import {WalletProvider} from "cloud-social-wallet";

function App() {
    return (
        <WalletProvider config={{rpc: '', backend_url: ''}}>
            <WalletApp/>
        </WalletProvider>
    )
}
```


```js
import {useWallet} from "cloud-social-wallet";

function WalletApp() {
    const {address, logout, login} = useWallet()
    return (
        <>
            {
                address ? <>
                    <p>{address}</p>
                    <p onClick={logout}>Disconnect</p>
                </> : <>
                    <p onClick={() => login('google')}>Google Login</p>
                    <p onClick={() => login('facebook')}>Facebook Login</p>
                </>
            }
        </>
    )
}
```
