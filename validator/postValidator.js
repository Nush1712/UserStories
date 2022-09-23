const {
  body,
  check,
  validationResult
} = require('express-validator');


exports.registerValidator = (req,res) =>{

    req.check('company' ,'Please provide company name to register').notEmpty();

        // .isEmpty();
    req.check('location','Please provide location name to register').notEmpty();
        // .not()
        // .isEmpty();
    req.check('bio','Please provide your bio to register').notEmpty();
        // .not()
        // .isEmpty();

  const error = validationResult(req)
  if(!error.isEmpty()){
    const alert = error.array()
    res.render('register', {
         alert
     })
  }
};
