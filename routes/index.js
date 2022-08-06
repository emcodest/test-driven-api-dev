var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' }); 
  res.json({cool: true, num: 12}) 
});
router.post('/send-message', function(req, res, next) {

  res.json({
    status: "Cool O"
  })

});

module.exports = router;
