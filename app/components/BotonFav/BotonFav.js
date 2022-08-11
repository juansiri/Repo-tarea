const React = require('react')


function BotonFav({product, setFavoritos, favoritos}) {


    

    const favCard = React.useRef(false)
    const [agregar, setAgregar] = React.useState('Agregar a favoritos')

    function handlePush(){
        if(favoritos.includes(product)) {
            console.log('Entro if')
            let obj = favoritos.filter(prod => prod !== product)
            setFavoritos(obj)
            favCard.current = false
            setAgregar('Agregar a favoritos')
        } else {
            console.log('Entro else')
            setFavoritos(favoritos => [...favoritos, product])
            favCard.current = true
            setAgregar('Quitar de favoritos')
        }
    }
    
    
    
    return (
        <button ref={favCard} onClick={handlePush}>{agregar}</button>
    )
}


module.exports = BotonFav