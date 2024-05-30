export const network: 'mainnet' | 'testnet' = 'mainnet';

export const NETWORKS = {
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
export const NETWORK = NETWORKS[network] as NETWORK