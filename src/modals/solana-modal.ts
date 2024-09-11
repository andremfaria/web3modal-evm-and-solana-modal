import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react'
const chains = [
    {
        chainId: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
        name: 'Solana',
        currency: 'SOL',
        explorerUrl: 'https://solscan.io',
        rpcUrl: 'https://rpc.walletconnect.org/v1',
    },
    {
        chainId: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
        name: 'Solana Testnet',
        currency: 'SOL',
        explorerUrl: 'https://explorer.solana.com/?cluster=testnet',
        rpcUrl: 'https://rpc.walletconnect.org/v1',
    },
    {
        chainId: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
        name: 'Solana Devnet',
        currency: 'SOL',
        explorerUrl: 'https://explorer.solana.com/?cluster=devnet',
        rpcUrl: 'https://rpc.walletconnect.org/v1',
    },
]

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID as string

const solanaConfig = defaultSolanaConfig({
    chains,
    projectId: PROJECT_ID,
    metadata: {
        name: 'Solana Wallet',
        description: 'Connect to your Solana wallet',
        icons: ['https://solana.com/favicon.ico'],
        url: 'https://solana.com',
    },
    auth: undefined,
})

export const getSolanaModal: () => ReturnType<typeof createWeb3Modal> = () => (createWeb3Modal({
        solanaConfig,
        projectId: PROJECT_ID,
        metadata: solanaConfig.metadata,
        chains,
        themeMode: 'dark',
        allowUnsupportedChain: true,
        allWallets: 'SHOW',
        themeVariables: {
            '--w3m-font-family': 'Gilroy-Regular, sans-serif',
            '--w3m-border-radius-master': '12px',
        },
    }))
