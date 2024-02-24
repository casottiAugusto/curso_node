const { body, validationResult } = require("express-validator");
module.exports.validateUser = [
    body('titulo')
        .notEmpty()
        .withMessage('Minimum 3 characters required!'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
      console.log(errors.array())
      res.redrect('noticias,salvar')
      next();
    },
  ];