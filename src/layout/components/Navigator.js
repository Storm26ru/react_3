import './Navigator.css';
import React from 'react'
class Navigator extends React.Component 
{
    state={page:1}
    Previos =() =>{
        this.setState(
            ()=>(this.state.page>1 ? {page:this.state.page-1}:{page:1}),
            ()=>(this.props.setPage(undefined,this.state.page))
        )
    }
    Next = ()=>{
        this.setState(
            ()=>(this.state.page<Math.ceil(this.props.count/12) ? {page:this.state.page+1}
                                                                : {page:Math.ceil(this.props.count/12)}),
            ()=>(this.props.setPage(undefined,this.state.page))
        )
    }
    render()
    {
        let limit = 10;
        let totalPages = Math.ceil(this.props.count/12);

        let endIndex = (Math.floor(this.state.page/limit)+1)*10>totalPages ? totalPages : 
                        (Math.floor(this.state.page/limit)+1)*10;
        let startIndex = endIndex-limit<0 ? 0 : endIndex-limit;
        let pages = [];
        for(let i = 1; i<=totalPages; i++)pages.push(i);
        return(
            <div className='navigation'>
                <button className='btn' 
                    onClick={//()=>{this.state.page>1 ? this.setState({page:this.state.page-1}):this.setState({page:1});
                                // this.props.setPage(undefined,this.state.page) }
                                this.Previos
                            }>Previos</button>
                <div>
                    {
                        pages.slice(startIndex,endIndex).map(
                           (num,index)=>(
                               <button className='btn' key={index}
                               onClick={(e)=> {this.props.setPage(undefined,e.target.textContent);this.setState({page:num})}}
                               style={{background:this.state.page==num ? "rgb(5, 176, 243)":""}}>{num}</button>

                           ) 
                        )
                    
                    }
                </div>
                 <button className='btn'
                    onClick={//()=>{this.state.page<=totalPages ? this.setState({page:this.state.page+1}):this.setState({page:totalPages});
                                // this.props.setPage(undefined,this.state.page) }
                                this.Next
                            }>Next</button>

            </div>
    )
    }
    
}
export default Navigator;