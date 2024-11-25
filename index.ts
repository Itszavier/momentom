/** @format */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { renderToString } from "react-dom/server";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 8080;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.get("/", async (req, res) => {
    const url = req.originalUrl;
    
    const { render } = await vite.ssrLoadModule(
      "/app/entry-server.tsx"
    );

    const rootHtml = render();

    const template = createTemplate(rootHtml);

    const html = await vite.transformIndexHtml(url, template);

    res.send(html);
  });

  app.listen(PORT, function () {
    console.log(`istening on port http://localhost:${PORT}`);
  });
}
function createTemplate(rootHtml: string) {
  return `
  <!DOCTYPE html>
   ${rootHtml}
  `;
}
createServer().catch((err) => console.log(err));
