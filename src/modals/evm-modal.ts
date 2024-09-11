import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
// 1. Get projectId
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID as string
function getBlockchainApiRpcUrl(chainId: number) {
    return `https://rpc.walletconnect.org/v1/?chainId=eip155:${chainId}&projectId=${PROJECT_ID}`
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const chains = [
    {
        chainId: 1,
        name: "Ethereum",
        currency: "ETH",
        explorerUrl: "https://etherscan.io",
        rpcUrl: getBlockchainApiRpcUrl(1),
    },
]


// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /* Required */
    metadata: {
        name: 'Ethereum Wallet',
        description: 'Connect to your Ethereum wallet',
        icons: ['https://ethereum.org/favicon.ico'],
        url: 'https://ethereum.org',
    },
    defaultChainId: 1
})
// 5. Create a Web3Modal instance
export const getEvmModal: () => ReturnType<typeof createWeb3Modal> = () => (createWeb3Modal({
        ethersConfig,
        chains,
        allowUnsupportedChain: true,
        projectId: PROJECT_ID,
        themeMode: 'light',
        allWallets: 'HIDE',
        enableAnalytics: true, // Optional - defaults to your Cloud configuration
        themeVariables: {
            '--w3m-font-family': 'Gilroy-Regular, sans-serif',
            '--w3m-border-radius-master': '12px',
        },
        featuredWalletIds: [
            'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
            '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        ],
    }))