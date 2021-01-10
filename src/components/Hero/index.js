import { SearchBar } from "../SearchBar"
import "./index.css"
import heroimg from "./resources/hero_img.png"

const Hero = () => {
    return (
      <div className="varela bg-img mv6 tl h-100">
        <div className="flex justify-around ph6">
          <div className=" pt6 w-40-l">
            <h1 className="f1">Powerful search tools for your documents</h1>
            <p className ="f3 mid-gray w-90-l">You simply input keywords, then all relavant results will be returned within miliseconds.</p>
          </div>
          <img src={heroimg} className="w-40-l "/>
        </div>
        <div className=""><SearchBar/></div>
        
        
      </div>
    );
  };
  
  export default Hero;
  