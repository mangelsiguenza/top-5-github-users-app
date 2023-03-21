import { Link } from 'react-router-dom'
import './index.css'

export const Header = ({ isBack = false }) => {
    return (
        <header className='header'>
            {isBack && (
                <Link to='/'> {'< Back'} </Link>
            )}
            <span>Home</span>
        </header>
    )
}
