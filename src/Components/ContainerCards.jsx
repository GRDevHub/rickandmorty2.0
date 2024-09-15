import Cards from './Cards'
import PropTypes from 'prop-types'

const ContainerCards = ( { personajes } ) =>{
    const styleCss = {
        width: '300px',
    }
    return(
        <div className='container border border-black row mx-auto'>
            { personajes.map(
                item => (
                    <div key={item.id} className='col' style={styleCss}>
                        <Cards item={item}/>
                    </div>
                )
            )}
        </div>
    )}

ContainerCards.propTypes = {
    personajes: PropTypes.array.isRequired,
}

export default ContainerCards;