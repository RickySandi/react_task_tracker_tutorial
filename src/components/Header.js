import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'      //use to know the actual browsers location (path)
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (         //*NgIf
                <Button
                    color={showAdd ? 'red' : 'green'} //*NgIf
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
