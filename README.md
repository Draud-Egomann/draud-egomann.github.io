# portfolio

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker Deployment

To deploy this application using Docker:

1. Run the all-in-one deployment:

   ```bash
   docker-compose up -d
   ```

2. Access the site at http://localhost

The Docker setup will automatically:

- Build the Nuxt application
- Set up Caddy to serve the application
- Make it available on port 80

To rebuild after changes:

```bash
docker-compose up -d --build
```

To view logs:

```bash
docker-compose logs -f
```

If you encounter issues:

- Check Caddy logs: `docker exec -it portfolio caddy logs`
- Verify files are correctly copied: `docker exec -it portfolio ls -la /srv`

## License

This project is licensed under the [GPL-3.0 License](LICENSE).
