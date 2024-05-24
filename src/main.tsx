import React from 'react'
import ReactDOM from 'react-dom/client'
import {WalletProvider} from "cloud-social-wallet";
import App from './App.tsx'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WalletProvider config={{prefix: 'neutron',rpc: 'https://rpc-falcron.pion-1.ntrn.tech', backend_url: 'https://cloud-wallet.cosmichub.store'}}>
            <App/>
        </WalletProvider>
    </React.StrictMode>
)
