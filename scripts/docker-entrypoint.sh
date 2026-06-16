#\!/bin/sh
set -e
echo "Initializing database schema..."
NODE_ENV=development npx tsx scripts/init-db.mjs
echo "Starting Next.js server..."
exec env NODE_ENV=production npm start
