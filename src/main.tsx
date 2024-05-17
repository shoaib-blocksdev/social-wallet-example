import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {WalletProvider} from "cloud-social-wallet";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WalletProvider config={{rpc: 'https://rpc-falcron.pion-1.ntrn.tech', backend_url: 'https://cloud-wallet.cosmichub.store'}}>
            <App/>
        </WalletProvider>
    </React.StrictMode>,
)
