import PropTypes from 'prop-types'

const Header = ({ title }) => {

    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <h3 className="navbar-brand text-uppercase">{title}</h3>
            </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;