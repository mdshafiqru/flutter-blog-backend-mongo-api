module.exports = (express) => {
    const router = express.Router();
    const authController = require('../controllers/common/auth_controller');
    const admin = require('../middlewares/admin/admin');
    const authValidator = require('../middlewares/validators/auth_validator');
    const avatarUpload = require('../middlewares/common/avatar_upload');

    router.post('/login', authValidator.login, authController.adminLogin);
    // router.post('/register', authValidator.register , authController.register);

    router.get('/', admin, authController.admin);
    router.put('/update-pass', admin, authValidator.updatePass, authController.updateAdminPass);
    router.put('/update-profile', admin, authValidator.updateProfile, authController.updateAdminProfile);
    router.put('/update-profile-photo', admin, avatarUpload, authController.updateAdminProfilePhoto);
    
    return router;
}
