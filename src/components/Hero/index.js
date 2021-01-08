import "./index.css"
import heroimg from "./resources/hero_img.png"

const Hero = () => {
    return (
      <div className="varela bg-img  tl flex justify-around pa5 h-100">
          <div className="ph5">
            <h1>Powerful search tools for your documents</h1>
            <p>You simply input keywords, then all relavant results will be returned within miliseconds</p>
          </div>
          <img src={heroimg} className="w-25 h-25 ph5"/>
      </div>
    );
  };
  
  export default Hero;
  