import { Application } from "https://deno.land/x/oak/mod.ts";
import smarthome from "./routes/smarthome.ts"

const app = new Application();

app.use(smarthome.routes())



addEventListener("fetch", app.fetchEventHandler());