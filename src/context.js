import React from 'react';
import {useContext,useState} from 'react';
import useFetch from './useFetch';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({children})=>{
  const [query,setQuery] = useState('spider');
  const {data:movies,error,isLoading} = useFetch(`&s=${query}`);

  return <AppContext.Provider value={{movies,error,query,isLoading,setQuery}}>
    {children}  
  </AppContext.Provider>
}

export const useGlobalContext = ()=>{ 
  return useContext(AppContext);
}

export {AppContext,AppProvider}