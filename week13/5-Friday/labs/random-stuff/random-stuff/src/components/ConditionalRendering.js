import React,{useState, useEffect} from "react";

const ConditionalRendering = () => {

  const [isLoaded, setIsLoaded] = useState(false); // checking to see if data has loaded

  useEffect(() =>{
    //represents a long api call
    setTimeout(()=>{
      setIsLoaded(true);
    },3000)
  }, [])

  if(!isLoaded){
    return<>Data is loading </>
  }
  else{
    return 
    
  }

};

export default ConditionalRendering;
