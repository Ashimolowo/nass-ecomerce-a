import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {

    const {pathname} = useLocation()
    useEffect(() => {
       setTimeout(() => {
         //window.scrolltop({ top: 0, behaviour: 'smooth'})
         window.scrollTo(0,0)
       }, 0);
    }, [pathname])
    return null
}
 
export default ScrollTop;