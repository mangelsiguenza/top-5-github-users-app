import { Link } from 'react-router-dom'
import './index.css'

export const Button = ({ username }) => {
    return (
        <div className='button'>
            <Link
                to={`/user/${username}`}
            >
                {username}
            </Link>
        </div>
    )
}
