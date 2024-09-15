import PropTypes from 'prop-types'

const Cards = ({ item }) => {
    const estilo = {
        width: '18rem'
    }
    return(
        <div className="card mb-4" style={estilo}>
            <img src={ item.image } className="card-img-top" alt={ item.name } />
            <div className="card-body">
                <p className="card-title">
                    <span className='fw-bold'>Name: </span>{ item.name }
                </p>
                <p className="card-text">
                    <span className='fw-bold'>Estatus:</span> { item.status }
                </p>
            </div>
        </div>
    )
}

Cards.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Cards