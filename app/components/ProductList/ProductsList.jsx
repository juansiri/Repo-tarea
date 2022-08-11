const React = require('react')
const ProductCard = require('../../components/ProductCard')



function ProductsList(props) {

    const { products } = props

    const[ favoritos, setFavoritos ] = React.useState([])

    return (
        <>
            {
                products.length ? (
                    <ul>
                        {
                            products.map(prod => (
                                 <ProductCard setFavoritos={setFavoritos} favoritos={favoritos} key={prod.id} product = {prod}/>
                            ))
                        }
                    </ul>
                ) : <h1>No se encontraron productos</h1>
            }

            <ul>
                {
                    favoritos.map(prod => (
                        <li>{prod.title}</li>
                    ))
                }
            </ul>
        </> 

    )
}

module.exports = ProductsList;