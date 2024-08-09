const { createUser } = require('../business/user.business');
const { format } = require('date-fns');
const md5 = require('md5');

const createUserController = async (req, res) => {
    try {
        const userInfo = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: md5(req.body.password),
            createdat: format(new Data(), "yyyy/MM/dd HH:mm"),
        }
        const item = await createUser(userInfo);
        res.status(201).json(item);
    } catch (err) {
        console.log(err);
 
        res.status(500).send("Internal Server Error")
    }

}

module.exports = { createUserController }