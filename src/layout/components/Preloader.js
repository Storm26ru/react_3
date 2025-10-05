import './Preloader.css';
import React from 'react';

class Preloader extends React.Component
{
    render()
    {
        return(
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        )
    }
}
export default Preloader;