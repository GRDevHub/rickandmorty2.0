import PropTypes from 'prop-types'

const Paginacion = ({ anterior , siguiente, onSiguiente, onAnterior}) => {
    return (
        <nav>
            <ul className='pagination justify-content-center mt-4'>
                { anterior ?
                    <button className='btn btn-danger' onClick={onAnterior}>Anterior</button> 
                    :
                    <button className='btn btn-danger disabled' onClick={onAnterior}>Anterior</button> 
                }
                {siguiente ?
                    <button className='btn btn-success' onClick={onSiguiente}>Siguiente</button>
                    :
                    <button className='btn btn-success disabled' onClick={onSiguiente}>Siguiente</button>
                }
            </ul>
        </nav>
    )
}

Paginacion.propTypes = {
    onSiguiente: PropTypes.func.isRequired,
    onAnterior: PropTypes.func.isRequired,
    anterior: PropTypes.string.isRequired,
    siguiente: PropTypes.string.isRequired
}

export default Paginacion;
