/** @type {import('next').NextConfig} */
const nextConfig = {
    async generateStaticParams(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/src/app/layout' }, // 페이지 경로 설정
        };
    },
};
module.exports = nextConfig;
