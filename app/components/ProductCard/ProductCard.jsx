const React = require('react')
const PropTypes = require('prop-types')
const BotonFav = require('../BotonFav')


function ProductCard({product, key, setFavoritos, favoritos}){

    const { title, thumbnail, price, permalink} = product

    


    return (
       
            <> 
                <li key={key}>
                    <h2>{title}</h2>  
                    <a href={permalink}>
                        <img src={thumbnail} alt={title} lazyload="off" />
                    </a>
                    <h3>{price}</h3>
                </li>
                <BotonFav product = {product} setFavoritos = {setFavoritos} favoritos = {favoritos}/>
            </>
            
        )
}


ProductCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    i18n: PropTypes.shape({
        getText: PropTypes.func.isRequired
    })


}

module.exports = ProductCard;



