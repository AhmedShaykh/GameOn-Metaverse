"use client";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {

    const host = typeof window !== "undefined" ? window.location.host : "defaultHost";

    const sdkOptions = {
        logging: { developerMode: false },
        checkInstallationImmediately: false,
        dappMetadata: {
            name: "GameOn Metaverse",
            url: host
        }
    };

    return (
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <ChakraProvider>{children}</ChakraProvider>
        </MetaMaskProvider>
    )
};

export default Providers;