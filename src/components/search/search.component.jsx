import React from "react";
import { useGlobalContext } from "../../context";
import './search.styles.css';

const Search = ()=>{
  const {query,setQuery,error} = useGlobalContext();
  return <form className="search-form" action="submit" onSubmit={(e)=>e.preventDefault()}>
            <h1>Search Movies</h1>
            <input placeholder="Search any movie" className="form-input" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
            {error.show ? <div className="error">{error.msg}</div>:null}
        </form>
}

export default Search;