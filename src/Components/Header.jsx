import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <div style={cssVarStyles}>
                <h1>{title}</h1>
            </div>
            <Button color={showAdd ? 'darkred' : 'green'} text={showAdd ? 'Close' : 'Create'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'default text',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const cssVarStyles = {
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    color: 'white',
}

export default Header