const { createTodo, getAlltodo, getTodoById, getTodoByName, getTodoByStatus, updateTodoById, todoDelete } = require('../business/todo.business');

const { } = require('date-fns')

const createTodoController = async (req, res) => {
    const newItem = {
        todoname: req.body.todoname,
        status: '1000',
        createdat: format(new Date(), 'yyy-MM-dd HH:mm'),
        updatedat: format(new Date(), 'yyy-MM-dd HH:mm'),
    };
    const Item = await createTodo(newItem);
    res.status(202).json(Item);
}

const getAlltodoController = async (req, res) => {
    const items = await getAlltodo();
    res.status(202).json(items);
}

const getTodoByIdController = async (res, req) => {
    const { id } = req.params;
    const item = await getTodoById(id);
    if (item) {
        res.status(404).json({ message: 'Given id not found!!' });
    }
    else {
        res.status(200).json(item);
    }
}

const getTodoByNameController = async (req, res) => {
    const { name } = req.params;
    const item = await getTodoByName(name);
    if (item) {
        res.status(404).json({ message: 'Given Id not found!!' });
    }
    else {
        res.status(200).json(item);
    }
}

const getTodoByStatusController = async (req, res) => {
    const { status } = req.params;
    const item = await getTodoByStatus(status);
    if (!item) {
        res.status(404).json({ message: 'Given Todo status not found!!' })
    }
    else {
        res.status(200).json(item);
    }
}

const updateTodoStatusByController = async (req, res) => {
    try {
        const { id } = req.params;
        let todoData = await getTodoById(id);
        if (!todoData) {
            res.status(404).json({ message: 'Given todo id not exist !!' })
        }
        todoData.status = req.body.status;
        todoData.updatedat = format(new Date(), 'yyyy-MM-dd  HH:mm:ss');
        const item = await updateTodoById(id, todoData);
        if (!item) {
            res.status(404).json({ message: 'Given todo id not exist!!' });
        } else {
            res.json(item);
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

const todoDeleteController = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await todoDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Given todo id not found!!' });
        } else {
            res.status(200).json({ message: 'Todo item deleted successfully!', item });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    createTodoController,
    getAlltodoController,
    getTodoByIdController,
    getTodoByNameController,
    getTodoByStatusController,
    updateTodoStatusByController,
    todoDeleteController,
}