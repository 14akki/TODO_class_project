const Item = require('../model/todo.schema');

const createTodo = async (todoData) => {
    try {
        const newTodo = new todo(todoData);
        await newTodo.save();
        return newTodo;
    } catch (err) {
        throw err;
    }
}

const getAlltodo = async () => todo.find();

const getTodoById= async(id)=> todo.findById(id);

const updateTodoById= async(id, updatedTodoData)=>{
    todo.findByIdAndUpdate(id, updatedTodoData,{new:true});
}



module.exports = {
    createTodo,
    getAlltodo,
    getTodoById,
    getTodoByName,
    getTodoByStatus,
    updateTodoById,
}