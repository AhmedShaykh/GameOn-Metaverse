/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "theme-land.com",
                pathname: "**",
            }
        ]
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            net: false,
            tls: false
        };
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    }
};

export default nextConfig;