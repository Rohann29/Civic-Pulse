/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Whenever our frontend asks for /api/langflow...
        source: '/api/langflow',
        // ...Next.js secretly forwards it to your local Langflow server!
        destination: 'http://127.0.0.1:7860/api/v1/run/a7a6a39b-7f93-49a4-aa0f-f969da1acd67',
      },
    ]
  },
}

export default nextConfig;