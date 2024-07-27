const express= require('express');
const router= express.Router();

//router.get('/', getTodo);
router.post('/', createTodo);

module.exports= router;;