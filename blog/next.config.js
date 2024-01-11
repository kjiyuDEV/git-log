/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/src/app/page' }, // 페이지 경로 설정
        };
    },
};
module.exports = nextConfig;
