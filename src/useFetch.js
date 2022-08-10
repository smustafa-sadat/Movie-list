import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./context";

const useFetch = (urlParams)=>{
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const [error,setError] = useState({show:false,msg:''});
  const fetchMovies = async (url)=>{
    try{
      setIsLoading(true);
      const response = await fetch(url);
      const responsData = await response.json();
      if(responsData.Response === 'True'){
        setError({show:false,msg:''})
        setData(responsData);
      }else{
        setError({show:true,msg:responsData.Error})
      }
      setIsLoading(false);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  },[urlParams])
  return {data, isLoading, error}
}

export default useFetch;