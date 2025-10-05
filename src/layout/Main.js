import './Main.css';
import React from 'react';
//import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Preloader from './components/Preloader';
import Search from './components/Search';
import Navigator from './components/Navigator';


class Main extends React.Component
{
    state={movies:[],page:1,strSch:"matrix",startItem:0,count:0};
    componentDidMount()
    {
        // fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=matrix`).then(response=>response.json()).then(
        //     data=>this.setState({movies:data.Search})
        // );
       this.txtSearch();
    }

    txtSearch = async(strSch=this.state.strSch,page=this.state.page) => 
    {
        this.setState({strSch:strSch,startItem:0})
        let arData = [];
        //let pages=16;
        //let totalResults=0;
        let startPage=1;
        let endPage=2;
        const count = 12;
        // await fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${strSch.trim()}`).then(response=>response.json()).then(
        //       //data=>{totalResults=data.totalResults; if(page==1)this.setState({movies:data.Search})}
        //       data=>totalResults=data.totalResults
        //     );

        if(page>1){
            startPage=Math.ceil(((page-1)*count)/10);
            endPage = Math.ceil(page*count/10);
            this.setState({startItem:((page-1)*count)%10});
        }
        console.log(arData);

           for(let i = startPage; i<=endPage; i++)
           {
               await fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${strSch.trim()}&page=${i}`).then(response=>response.json()).then(
               data=>{arData.push(...data.Search); this.setState({movies:arData}); 
               this.setState({count:data.totalResults})}
               );
           }
        // console.log(arData);
         //console.log(this.state.count);
         console.log(Math.ceil(12/12));
        // this.setState({movies:arData});
       // fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${strSch.trim()}`).then(response=>response.json()).then(
        //      data=>this.setState({movies:data.Search})
        // );
        //   await fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${strSch.trim()}&page=${page}`).then(response=>response.json()).then(
        //       data=>this.setState({movies:data.Search})
        //   );
         // await fetch(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${strSch.trim()}&page=2`).then(response=>response.json()).then(
           //    data=>this.setState(prevState=>({movies:[...prevState.movies,data.Search[0],data.Search[1]]}))
          //);

    }

    render()
    {
        return(
            <div className='main'>
                <div className='wrap'>
                    <Search txtSearch = {this.txtSearch}/>
                    {
                        this.state.movies.length ?  <MovieList movies={this.state.movies} startItem={this.state.startItem}/> : <Preloader/>
                    }
                    <Navigator setPage={this.txtSearch} count={this.state.count}/>
                </div>
            </div>
        )
    }
}
export default Main;