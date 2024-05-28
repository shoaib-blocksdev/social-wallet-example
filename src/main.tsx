import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import {WalletProvider} from "cloud-social-wallet";
import './index.css'
import './App.css'
import 'react-tooltip/dist/react-tooltip.css'
import Layout from './components/Layout.tsx';
import Home from "./components/Home.tsx";
import BalanceProvider from "./context/BalanceProvider.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WalletProvider config={{
            prefix: 'neutron',
            rpc: 'https://rpc-falcron.pion-1.ntrn.tech',
            backend_url: 'https://cloud-wallet.cosmichub.store'
        }}>
            <Router>
                <BalanceProvider>
                    <Layout>
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/send'} element={<Home/>}/>
                            <Route path={'/receive'} element={<Home/>}/>
                        </Routes>
                    </Layout>
                </BalanceProvider>
            </Router>
            <ToastContainer />
        </WalletProvider>
    </React.StrictMode>
)
