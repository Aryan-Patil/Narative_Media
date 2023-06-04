import { useEffect } from "react";
import { useState } from "react";

function useWindowResize(){
    const [windowsize, setwindowsize] = useState({
        width: undefined,
        height:undefined,
    });

useEffect(() => {
  function handleResize(){
    setwindowsize({
        width:window.innerWidth,
        height: window.innerHeight,
    });
  }
  window.addEventListener("resize",handleResize);
  handleResize();

  return () => {
    window.addEventListener("resize",handleResize);
  }
}, [])
return windowsize;
}
export default useWindowResize;