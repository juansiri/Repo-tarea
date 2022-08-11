const router = require('nordic/ragnar').router();
const Service = require('../services/productsService')

router.get('/', (req, res) => { 
    
    const {name, limit, offset} = req.query
    console.log(name, limit, offset)
    
    Service.getProducts(req.platform.siteId, name, limit, offset)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

module.exports = router;
