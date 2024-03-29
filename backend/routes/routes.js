import express from 'express';
const router = express.Router();

import {
    removeCharacter,
    addCharacter,
    sendCharacter,
    updateCharacter,
    addRaid,
    sendRaids,
    updateRaid,
} from '../controllers/controller.js';

router.route('/removeCharacter').delete(removeCharacter);
router.route('/addCharacter').post(addCharacter);
router.route('/updateCharacter').post(updateCharacter);
router.route('/sendCharacter').get(sendCharacter);
router.route('/addRaid').post(addRaid);
router.route('/sendRaid').get(sendRaids);
router.route('/updateRaidStatus').put(updateRaid);

export default router;
