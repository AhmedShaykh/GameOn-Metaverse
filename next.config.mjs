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
    }
};

export default nextConfig;