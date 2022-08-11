const React = require('react')
const Service = require('../../../services/productsService')
const View = require('./view')


exports.fetchProducts = function fetchProducts(req, res, next){

    const {name, limit} = req.query;

    Service.getProducts(req.platform.siteId, 'samsung', 10, 0).then(response => {
        
        
        res.locals.products = response;
        next()
    })
    .catch(err => console.log(err))
}


exports.render = function render(req, res) {

    const ProductList = props => <View {...props}/>

    res.render(ProductList, {
        products: res.locals.products,
    })

}