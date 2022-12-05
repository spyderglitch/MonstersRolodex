import { Component } from "react";

import './search-box-styles.css';

class SearchBox extends Component{
    render(){
        const { handleSearchInput, className } = this.props;
        return(
            <div>
                <input type='search' className={`search-box ${className}`} onChange={handleSearchInput} placeholder='search momsters' />
            </div>
        )
    }
};

export default SearchBox;