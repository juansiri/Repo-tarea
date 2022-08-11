const hydrate = require('nordic/hydrate');
const View = require('../pages/productList/view.js')
const React = require('react')


const { products } = window.__PRELOADED_STATE__

hydrate (
    <View products={products}/>,
    document.getElementById('root-app')
)