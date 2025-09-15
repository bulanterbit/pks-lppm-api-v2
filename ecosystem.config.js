module.exports = {
  apps: [
    {
      name: "pks-api",
      script: "server.js",
      // Jangan masukkan SECRET di sini kalau file ini di-commit!
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        // Variabel lain akan dibaca dari .env.production lewat dotenv-flow
      },
    },
  ],
};
