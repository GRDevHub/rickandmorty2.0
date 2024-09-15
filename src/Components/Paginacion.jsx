import PropTypes from 'prop-types'

const Paginacion = ({onSiguiente, onAnterior}) => {
    return (
        <nav>
            <ul className='pagination justify-content-center mt-4'>
                <button className='btn btn-danger' onClick={onAnterior}>Anterior</button>
                <button className='btn btn-success' onClick={onSiguiente}>Siguiente</button>
            </ul>
        </nav>
    )
}

Paginacion.propTypes = {
    onSiguiente: PropTypes.func.isRequired,
    onAnterior: PropTypes.func.isRequired,
}

export default Paginacion;
