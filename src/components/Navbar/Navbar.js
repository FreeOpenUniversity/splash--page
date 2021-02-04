
import logo from "./CISlogo.png"
import { Link} from "react-router-dom";



const Navbar = () => {

        return (
            <div className="">
                <nav className="flex justify-between items-center ph5 fixed w-100 top-0 ">
                    <div className="flex items-center pv3 "> 
                        <img src={logo} className="w3 h3 pr3 br self-start "></img>
                        <h1><Link className="varela f3 pl3 no-underline black" to="/"> Collegiate Independent Study</Link></h1>
                    </div>
                
                    <ul className="flex no-underline items-center
                    ">
                        <li className="list"><Link className="ttu ph2 mh3 varela no-underline black" to="/products">Products</Link></li>
                        <li className="list" ><Link className="ttu varela no-underline black ph2 mh3" to="/technologies">Technologies</Link></li>
                        <li className="list"><Link className="ttu p2 pr3 mh3 varela no-underline black" to="/teams">Teams</Link></li>
                        <button className="fw6  white ph4 br-pill pv2 f4 ttc bg-blue bw0"><Link className="link "to="/contact">Contact</Link> </button>

                    </ul>
                </nav>
            </div>


        ); 
    
}



export default Navbar