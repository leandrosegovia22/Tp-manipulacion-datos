const { body } = require('express-validator');

module.exports = [
    body('title')
        .notEmpty().withMessage("ingresar titulo"),
    body('rating')
        .notEmpty().withMessage("ingresar rating")
        .isInt().withMessage("solo numeros"),
    body('awards')
        .notEmpty().withMessage("ingresar premios")
        .isInt().withMessage("solo numeros"),
    body('release_date')
        .notEmpty().withMessage('ingresar fecha'),
    body('length')
        .notEmpty().withMessage("ingresar duración")
        .isInt().withMessage("solo numeros")    
]

