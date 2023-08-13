
const { check, validationResult } = require("express-validator");

const validateSignupRequest = [

    check('password', "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character. ",
    )
    .isLength({ min: 8 })
    .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
        )
    
];

const validateSigninRequest = [
  
    check('password', "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character.",
    )
    .isLength({ min: 8 })
    .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
        )
];

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}

module.exports ={validateSignupRequest, validateSigninRequest,isRequestValidated };