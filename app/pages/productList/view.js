const React = require('react')
const serialize = require('serialize-javascript');
const restClient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
})
const Script = require('nordic/script')
const ProductsList = require('../../components/ProductList')




function View(props) {

    console.log("View se ejecuta")

    const { products } = props


    const isMounted = React.useRef(false);
  

    const preloadedState = {
        products,
    }
    
    const [ page, setPage ] = React.useState(0)
    const [productsList, setProductsList] = React.useState(products)
   


    

   

    React.useEffect(()=> {
        console.log("useEffect se ejecuta")
        if(isMounted.current) {
            restClient.get('/get-products?', {
                params: {
                    name: "samsung",
                    limit: 10,
                    offset: page
                }
            }). then( data => {
                setProductsList(productsList => productsList = data.data)
            }). catch(err => console.log(err))
        }
        isMounted.current = true;
    }, [page])

    const handleNext = () => {
        console.log("CLICKKKKKK")
        setPage(page => page + 10)
    }
    const handleBefore = () => {
        console.log("CLICKKKKKK")
        setPage(page => page < 10 ? page : page - 10)
    }

    const handleReset = () => {
        console.log("CLICKKKKKK")
        setPage(0)
    }
    

    
    

    

    return (
        <>
        <Script>
            {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
        </Script>


        {/* Es para cargar las dependencias en el cliente */}
        <Script src="vendor.js"></Script>

        {/* Carga el archivo app/client/productslist.js en el navegador del usuario (cliente) */}
        <Script src="productslist.js"></Script>
            {/* {
                productsList.length ? (
                    <ul>
                        {
                            productsList.map(prod => (
                                <li key={prod.id}>
                                    <h2>{prod.title}  || {prod.name}</h2>  
                                    <a href={prod.permalink}>
                                         <img src={prod.thumbnail} alt={prod.name} lazyload="off" />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                ) : <h1>No hay productos</h1>
            }

             */}
             

            <ProductsList products = { productsList }/>
            <button onClick={handleBefore}>Anteriores 10</button>

            <button onClick={handleReset}>Inicio</button>

            <button onClick={handleNext}>Siguientes 10</button>
            

        </>
    )
}

module.exports = View