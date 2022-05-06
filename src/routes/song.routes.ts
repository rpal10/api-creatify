import { Router } from "express";

import { liked, playlist } from "../controllers/song.controller";

const router = Router();

router.get("/liked", liked);
router.get("/playlist", playlist);

export default router;
