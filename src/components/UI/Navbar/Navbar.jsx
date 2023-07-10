import React from 'react';
import {Link} from 'react-router-dom'
import MyButton from '../button/MyButton';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about'><MyButton>About</MyButton></Link>
                <Link to='/posts'><MyButton>Posts</MyButton></Link>
            </div>
        </div>
    )
}

export default Navbar;