"use client";
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme
} from "@rainbow-me/rainbowkit";
import {
    argentWallet,
    trustWallet,
    ledgerWallet
} from "@rainbow-me/rainbowkit/wallets";
import {
    configureChains,
    createConfig,
    WagmiConfig
} from "wagmi";
import {
    polygonMumbai,
    sepolia,
    lineaTestnet
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";

const projectId = "WALLET_KEY";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, sepolia, lineaTestnet],
    [publicProvider()]
);

const { wallets } = getDefaultWallets({
    appName: "GameOn Metaverse",
    projectId,
    chains,
});

const demoAppInfo = {
    appName: "GameOn Metaverse"
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: "Other",
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains })
        ]
    }
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                appInfo={demoAppInfo}
                theme={darkTheme()}
            >
                <ChakraProvider>{children}</ChakraProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    )
};