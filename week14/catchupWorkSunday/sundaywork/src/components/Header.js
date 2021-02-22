import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <button className='btn'>Add
            </button>
        </header>
            
    
    )
}
Header.defaultProps = {
    title:"Task Tracker"
};

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS 
// const headingStyle = {
//     color:'red', backgroundColor:"black"
// }


export default Header
