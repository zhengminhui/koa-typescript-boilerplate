module.exports = {
  apps: [
    {
      name: 'koa-typescript',
      script: './app.ts',
      exec_mode: 'fork_mode',
      max_memory_restart: '1G',
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        USE_SESSION: true,
        NEED_CHECK_AUTH: true,
        PORT: 8080,
      },
      ignore_watch: ['./node_modules', '.git'],
      error_file: './log/err.log',
      out_file: './log/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    },
  ],
};
