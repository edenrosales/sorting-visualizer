import React from 'react'
import './components.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <ul className="nav-links">
                <Link  className='link' to="/selection-sort"><li>Selection Sort</li></Link>
                <Link  className='link' to='/bubble-sort'><li>Bubble Sort</li></Link>
                <Link classname='link' to='/modal'><li>Modal Page</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;