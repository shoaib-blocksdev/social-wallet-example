import {ReactNode} from "react";

export type Tab = {
    key: string,
    title: string,
    component: ReactNode,
    path: string
}

export type Tabs = Tab[]