const todo = require('../model/todo.schema');

const createTodo = async (todoData) => {
    try {
        const newTodo = new todo(todoData);
        await newTodo.save();
        return newTodo;
    } catch (err) {
        throw err;
    }
}

const getAlltodo = async () => {
    try {
        const allTodo = await todo.find();
        return allTodo;
    } catch (err) {
        throw err;
    }
}

const getTodoById = async (id) => {
    try {
        const idTodo = await todo.findById(id);
        if (!idTodo) {
            throw new Error('Todo not found');
        }
        return todoItem;
    } catch (error) {
        console.error('Error fetching todo by ID:', error);
        throw new Error('Unable to fetch todo');
    }
};

const getTodoByName = async (name) => {
    try {
        const nameTodo = await todo.findOne({ name });
        if (!nameTodo) {
            throw new Error('Todo not found');
        }
        return todoItem;
    } catch (error) {
        console.error('Error fetching todo by name:', error);
        throw new Error('Unable to fetch todo');
    }
};

const getTodoByStatus = async (status) => {
    try {
        const statusTodo = await todo.find({ status });
        if (!statusTodo) {
            throw new Error('todo not found')
        }

    } catch (err) {
        console.log("error in getting the status:", err);
        throw new Error("unable to fetch todo")
    }
}


const updateTodoById = async (id, updatedTodoData) => {
    try {
        const updatedTodo = await todo.findByIdAndUpdate(id, updatedTodoData, { new: true });
        if (!updatedTodo) {
            throw new Error('Todo not found');
        }
        return updatedTodo;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw new Error('Unable to update todo');
    }
};

const todoDelete = async (id) => {
    try {
        const deleteTodo = await todo.findByIdAndDelete(id);
        return deleteTodo;
    } catch (err) {
        console.log('error in unpdating todo:', err);
        throw new Error("unable  to update todo")
    }

}


module.exports = {
    createTodo,
    getAlltodo,
    getTodoById,
    getTodoByName,
    getTodoByStatus,
    updateTodoById,
    todoDelete,
}