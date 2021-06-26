import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
    
  console.log(event)
  const response = new Response(renderToString(<App />), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});
