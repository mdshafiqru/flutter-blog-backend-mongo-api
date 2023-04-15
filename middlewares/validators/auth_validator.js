const {body} = require('express-validator');

const validationHandler = require('../common/validation_handler');

const register = [
    body('name')
        .trim()
        .isAlpha("en-US", {ignore: " .-"})
        .withMessage('Name must be alphabet letters.')
        .isLength({min: 3})
        .withMessage("Name must be at lest 3 character long."),
    body('email')
        .trim()
        .isEmail()
        .withMessage("Provide a valid email"),
    body('password')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    validationHandler,
    
];

const login = [
    body('email')
        .trim()
        .isEmail()
        .withMessage("Provide a valid email"),
    body('password')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    validationHandler,
    
];
const checkResetPass = [
    body('email')
        .trim()
        .isEmail()
        .withMessage("Provide a valid email"),
    validationHandler,
];

// reset password for not logged in users
const resetPass = [
    body('email')
        .trim()
        .isEmail()
        .withMessage("Provide a valid email"),
    body('currentPass')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    body('newPass')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    validationHandler,
];

// update password for logged in users
const updatePass = [
    body('currentPass')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    body('newPass')
        .trim()
        .isLength({min: 6})
        .withMessage("Password must be at lest 6 character long."),
    validationHandler,
];


const updateProfile = [
    body('name')
        .trim()
        .isAlpha("en-US", {ignore: " .-"})
        .withMessage('Name must be alphabet letters.')
        .isLength({min: 3})
        .withMessage("Name must be at lest 3 character long."),
    

    validationHandler,
    
];



module.exports = {
    register,
    login,
    checkResetPass,
    validationHandler,
    resetPass,
    updatePass,
    updateProfile,
};