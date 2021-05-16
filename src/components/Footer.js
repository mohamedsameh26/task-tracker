import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyrigh &copy; 2021</p>
            <Link className="footer-link" to="/about">About</Link>
        </footer>
    )
}

export default Footer
