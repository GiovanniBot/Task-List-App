import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1 style={cssVarStyles}>{title}</h1>
            <Button color='green' text='Add task' onClick={onClick} />
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
    color: ''
}

export default Header