export const network: 'mainnet' | 'testnet' = 'mainnet';
export const COPNTEST = 'loop1erj9z696sdftjtxpjcf7dvmf709nmsqtnf2wq05fq0w6cuskza3sylkadk'

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
            token: 'NTRN',
            tokens: {}
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
            token: 'TOKEN',
            tokens: {
                [COPNTEST]: {
                    token: "COPNTEST",
                    isNative: false,
                    address: COPNTEST
                }
            }
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
            token: 'NTRN',
            tokens: {}
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
            token: 'NTRN',
            tokens: {}
        }
    }
}
export const NETWORK = NETWORKS['loop'][network] as NETWORK