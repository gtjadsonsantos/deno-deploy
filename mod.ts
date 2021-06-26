import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";

addEventListener("fetch", (event) => {
    
  console.log(event)
  const response = new Response("hellow smarthome"), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});
