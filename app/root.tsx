/** @format */
import React from "react";
import App from "./app";

export default function Root() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>My app</title>
      </head>
      <body>
        <App />
        <script type="module" src="/app/entry-client.tsx"></script>
      </body>
    </html>
  );
}
