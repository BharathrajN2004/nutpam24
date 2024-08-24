import express from 'express';
import { createServer as createViteServer } from 'vite';
import { render } from './src/entry-server';

const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.get('*', async (req, res) => {
    try {
      const context = {};
      const appHtml = render(req.url, context);

      if (context.url) {
        // Handle redirects
        return res.redirect(301, context.url);
      }

      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vite SSR React</title>
            <script type="module" src="/src/entry-client.jsx"></script>
          </head>
          <body>
            <div id="root">${appHtml}</div>
          </body>
        </html>
      `;

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      res.status(500).end(e.stack);
    }
  });

  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
}

createServer();
