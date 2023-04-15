const Todo = require('../models/todo');
const authValidator = require('../middlewares/validators/auth_validator');
const authController = require('../controllers/common/auth_controller');
const user = require('../middlewares/user/user');
const avatarUpload = require('../middlewares/common/avatar_upload');

module.exports = (express) => {
    const router = express.Router();

    // auth
    router.post('/login', authValidator.login, authController.login);
    router.post('/register', authValidator.register, authController.register);
    router.post('/check-reset-pass', authValidator.checkResetPass, authController.checkResetPass);
    router.put('/reset-pass', authValidator.resetPass, authController.resetPass);

    router.get('/', user, authController.user);
    router.put('/update-pass', user, authValidator.updatePass, authController.updatePass);
    router.put('/update-profile', user, authValidator.updateProfile, authController.updateProfile);
    router.put('/update-profile-photo', user, avatarUpload, authController.updateProfilePhoto);
    




    // todo
    router.post('/create-todo', async (req, res) => {
        const todo = new Todo(req.body);
        try {
            await todo.save();
            res.status(200).json({ message: "Todo inserted successfully!", success: true  });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.get('/all-todos', async (req, res) => {
        try {
            const todos = await Todo.find();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.get('/get-todo/:id', async (req, res) => {
        try {
            const todos = await Todo.findOne({_id: req.params.id});
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    router.put('/update-todo/:id', async (req, res) => {
        try {
            
            const result = await Todo.findByIdAndUpdate(
                {_id: req.params.id},
                {
                    $set: {
                        status: req.body.status,
                        title: req.body.title
                    },
                }, 
                {
                    useFindAndModify: false,
                    new: true
                }
            );

            console.log(result);

            res.status(200).json({ message: "Todo updated successfully!", success: true, result  });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}




