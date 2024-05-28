import {useLocation} from "react-router-dom";
import SendBalance from "./SendBalance.tsx";
import TabsContainer from "./TabsContainer.tsx";
import ReceiveToken from "./ReceiveToken.tsx";

const Tabs = [
    {
        key: 'send',
        title: 'Send',
        component: <SendBalance/>,
        path: '/send'
    },
    {
        key: 'receive',
        title: 'Receive',
        component: <ReceiveToken/>,
        path: '/receive'
    }
]
const Home = () => {
    const location = useLocation();
    const {pathname} = location;
    const active = {'/send': 'send', '/receive': 'receive'}[pathname]
    return <div>
        <TabsContainer tabs={Tabs} activeKey={active ?? 'send'}/>
    </div>
}

export default Home