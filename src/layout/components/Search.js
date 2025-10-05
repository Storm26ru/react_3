import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state = {strSch:""};

    render()
    {
        return(
            <div className='search'>
                <input type="search" placeholder='Введите название' onChange={(e)=>this.setState({strSch:e.target.value})}/>
                <button className='btn' onClick={()=>this.props.txtSearch(this.state.strSch)}>
                    <span className='btnSearch'></span>
                </button>
            </div>
        )
    }
}
export default Search;