// Define Router 
// Created By Pramod Kumar
const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/create', user_controller.user_create);
router.get('/getall', user_controller.user_getAll);
router.get('/:id', user_controller.user_details);
router.get('/:email', user_controller.user_byEmail);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);
module.exports = router;