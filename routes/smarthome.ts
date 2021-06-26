import { Router } from "https://deno.land/x/oak/mod.ts";

import { proxy } from "https://deno.land/x/oak_http_proxy@1.3.0/mod.ts";


const router  = new Router()


router.get("/:id",(ctx)=>{


    ctx.response.body = "jadson"
})



export default router