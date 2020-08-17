import React from 'react';
import Search from '../containers/Search';
import MoviesList from '../containers/MoviesList';

const Main = () => {
    return (
        <>  
            <hr/><br/>
            <Search/><br/>
            <hr/><br/>
            <MoviesList/>
            
        </>
    )
}

export default Main;