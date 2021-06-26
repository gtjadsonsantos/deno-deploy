import { Router } from "https://deno.land/x/oak/mod.ts";

const router  = new Router()

router.get("/:id",({request,response}) =>{

    response.body = "Jadson dos Santos Silva"

})



export default router