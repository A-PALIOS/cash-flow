import express from "express";
import {
    getUniqueNameErgaOfPar,
    getParErgColor,
    getSumofChoosenTimologioById,
    getErgaforTimologia,
    getParadoteaByErgoId,
    getErgaforParadotea,
    UpdateTimologia_idFromParadotea,
    CheckParadotea,
    ParadoteaBank_Date,
    ParadoteaCust_Date,
    getTim_From_Income,
    getParadoteoAndErgoByTimologio,
} from "../controllers/Queries.js"

import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/getlistErgaNames',verifyUser,adminOnly, getUniqueNameErgaOfPar);
router.get('/getlistParErgColors',verifyUser,adminOnly, getParErgColor);
router.get('/getSumofchosenTim/:id',verifyUser,adminOnly,getSumofChoosenTimologioById)
router.get('/getErgaforTimologia',verifyUser,adminOnly,getErgaforTimologia)
router.get('/getParadoteaByErgoId/:id',verifyUser,adminOnly,getParadoteaByErgoId)
router.get('/getErgaforParadotea/',verifyUser,adminOnly,getErgaforParadotea)
router.patch('/UpdateTimologia_idFromParadotea/:id', verifyUser,adminOnly,UpdateTimologia_idFromParadotea)
router.get('/CheckParadotea', verifyUser,adminOnly,CheckParadotea)
router.get('/ParadoteaBank_Date', verifyUser,adminOnly,ParadoteaBank_Date)
router.get('/ParadoteaCust_Date', verifyUser,adminOnly,ParadoteaCust_Date)
router.get('/getTim_From_Income', verifyUser,adminOnly, getTim_From_Income)

router.get('/getParadoteoAndErgoByTimologio/:timologia_id',verifyUser,adminOnly, getParadoteoAndErgoByTimologio)

// router.get('/getTimologiaFromEk/:timologia_id', verifyUser,adminOnly, getTimologiaFromEk)

// router.get('/timologia/:id',verifyUser,adminOnly,getTimologioById);
// router.post('/timologia',verifyUser,adminOnly,CreateTimologia);
// router.patch('/timologia/:id',verifyUser,adminOnly,UpdateTimologia);
// router.delete('/timologia/:id',verifyUser,adminOnly,DeleteTimologio);


export default router;