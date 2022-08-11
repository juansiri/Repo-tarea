/**
 * Acá deberás implementar un servicio que haga un llamado a la API 
 * interna y devuelva un array de productos.
 */

 const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: 'https://api.mercadolibre.com/',
  });
  const normalize = require('./transforms/normalize')
  
  class ProductsService { 
    static getProducts(siteId, name, limit, offset){
    return restclient.get(`/sites/${siteId}/search`, {
        params: {
          q:name,
          limit,
          offset,
        }
      })
      .then(res => normalize(res.data.results))
      .catch(err => console.log("error jgjg", err))
   }
  }
  
  module.exports = ProductsService;