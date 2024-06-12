export const network: 'mainnet' | 'testnet' = 'mainnet';

export const NETWORKS = {
    'loop': {
        'testnet': {
            name: "Neutron",
            title: "Neutron",
            chainId: 'atlantic-2',
            chain: 'seitestnet2',
            rpc: 'https://rpc-falcron.pion-1.ntrn.tech',
            socket: 'https://cloud-wallet.cosmichub.store',
            rest: '',
            denom: 'untrn',
            prefix: 'neutron',
            token: 'NTRN'
        },
        'mainnet': {
            name: "COPNTEST",
            title: "COPNTEST",
            chainId: 'loop-1',
            chain: 'Loop Fans',
            rpc: 'https://rpc.loop.pfc.zone',
            socket: 'https://cloud-wallet.cosmichub.store',
            rest: '',
            denom: 'token',
            prefix: 'loop',
            token: 'TOKEN'
        }
    },
    'neutron': {
        'testnet': {
            name: "Neutron",
            title: "Neutron",
            chainId: 'atlantic-2',
            chain: 'seitestnet2',
            rpc: 'https://rpc-falcron.pion-1.ntrn.tech',
            socket: 'https://cloud-wallet.cosmichub.store',
            rest: '',
            denom: 'untrn',
            prefix: 'neutron',
            token: 'NTRN'
        },
        'mainnet': {
            name: "Neutron",
            title: "Neutron",
            chainId: 'neutron-1',
            chain: 'neutron1',
            rpc: 'https://rpc.novel.remedy.tm.p2p.org',
            socket: 'https://cloud-wallet.cosmichub.store',
            rest: '',
            denom: 'untrn',
            prefix: 'neutron',
            token: 'NTRN'
        }
    }
}
export const NETWORK = NETWORKS['loop'][network] as NETWORK


export const tokens: Tokens = {
    "loop1erj9z696sdftjtxpjcf7dvmf709nmsqtnf2wq05fq0w6cuskza3sylkadk": {
        token: "COPNTEST",
        isNative: false,
        address: "loop1erj9z696sdftjtxpjcf7dvmf709nmsqtnf2wq05fq0w6cuskza3sylkadk"
    }
}