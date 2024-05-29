import './Layout.css'
import {ReactNode} from "react";
import {Link, useLocation} from "react-router-dom";
import {useBalance} from "../context/BalanceContext.ts";
import {DENOM} from "../Contants.ts";
import {useWallet} from "cloud-social-wallet";
import Button from './Button.tsx';

const Layout = ({children}: { children?: ReactNode }) => {
    const {address, login, logout} = useWallet()
    const location = useLocation();
    const {pathname} = location;
    const active = {'/send': 'send', '/receive': 'receive'}[pathname]
    const {balance} = useBalance()
    return (address ? <div className={"body"}>
            <div id="nav-bar">
                <input id="nav-toggle" type="checkbox"/>
                <div id="nav-header">
                    <div className={"balance"}>
                        <h6>Balance</h6>
                        <h2>{balance} <span>{DENOM}</span></h2>
                    </div>
                    {/*<label htmlFor="nav-toggle"><span id="nav-toggle-burger"></span></label>*/}
                    <hr/>
                </div>
                <div id="nav-content">
                    {/*<Link to={'/'} className="nav-button active"><i className="fas fa-palette"></i><span>Home</span></Link>*/}
                    <Link to={'/send'} className={`nav-button ${active == 'send' || pathname === '/' ? 'active' : ''}`}><i
                        className="fas fa-palette"></i><span>Send</span></Link>
                    <Link to={'receive'} className={`nav-button ${active == 'receive' ? 'active' : ''}`}><i
                        className="fas fa-images"></i><span>Receive</span></Link>
                    {/*<hr />*/}
                    {/*<div className="nav-button"><i className="fas fa-gem"></i><span>Codepen Pro</span></div>*/}
                    <div id="nav-content-highlight"></div>
                </div>
                <input id="nav-footer-toggle" type="checkbox" />
                <div id="nav-footer">
                    <div id="nav-footer-heading" className={"logout-btn"} onClick={logout}>
                        {/*<div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>*/}
                        <div id="nav-footer-titlebox"><div id="nav-footer-title" >Logout</div>
                            {/*<span id="nav-footer-subtitle">Admin</span>*/}

                        </div>
                        {/*<label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>*/}
                    </div>
                    {/*<div id="nav-footer-content">*/}
                    {/*    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className={"content"}>
                {children}
            </div>
        </div> : <div className={"body"}>
            <div className="connect-wallet">
                <Button outline type={'button'} onClick={() => login('google')}>Login with Google</Button>
            </div>
        </div>
    )
}

export default Layout