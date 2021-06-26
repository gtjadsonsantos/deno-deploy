import { Router } from "https://deno.land/x/oak/mod.ts";

import { proxy } from "https://deno.land/x/oak_http_proxy@1.3.0/mod.ts";


const router  = new Router()


router.get("/:id",proxy("https://becocastelo.unicontrol.me",{

    srcResDecorator: (req, res, proxyRes, proxyResData) => {
        res = proxyRes
        res.body = proxyResData
    }

}))



export default router