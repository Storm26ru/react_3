import './Footer.css';
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                Copyright &copy; {new Date().getFullYear()}
            </div>
        )
    }
}
export default Footer;