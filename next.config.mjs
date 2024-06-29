/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/portfolio-website",
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
