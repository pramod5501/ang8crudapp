// Define Router 
// Created By Pramod Kumar
const express = require('express');
const router = express.Router();
const library_controller = require('../controllers/library.controller');

router.post('/create', library_controller.library_create);
router.get('/getall', library_controller.library_getAll);
router.get('/:id', library_controller.library_details);
router.get('/:email', library_controller.library_byEmail);
router.put('/:id/update', library_controller.library_update);
router.delete('/:id/delete', library_controller.library_delete);
module.exports = router;