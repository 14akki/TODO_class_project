const express= require('express');
const router= express.Router();

const {createTodoController, getAlltodoController,getTodoByIdController, getTodoByNameController, 
    getTodoByStatusController, updateTodoStatusByController}=  require('../controller/todo.controller')

//router.get('/', getTodo);
router.post('/create', createTodoController);
router.get('/', getAlltodoController);
router.get('/:id', getTodoByIdController);
router.get('/getTodobyname/:name', getTodoByNameController);
router.get('/gettodobystatus/:status',  getTodoByStatusController);
router.put('/:id',updateTodoStatusByController);

module.exports= router;