
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

function Home()
{
    const navigation = useNavigate();

    return(
        <div className="one">
            <div>
                <p className="text">2000+ job offers available!</p>
                <h4><b>Find your dream jobs</b></h4>
                <button style={{marginLeft:"10rem"}} onClick={() => navigation("/jobs")} class="btn btn-warning my-2 my-sm-0" >Find Job </button>
                <img style={{ width: '50px', height: '50px', borderRadius: '50px', marginLeft: ".5rem"}} src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg" alt="" />
                <dl><b>TOP MNC COMPANIES</b></dl>
                    <ul style={{listStyleType:"none",textAlign:"inherit"}}>
                    <b><li>BMW</li>
                    <li>TCS</li>
                    <li>Google</li>
                    <li>Microsoft</li>
                    <li>Oppo</li>
                    <li>LinkedIn</li>
                    <li>Amazon</li>
                    <li>Apple</li>
                    <li>Infosys</li>
                    <li>SBI</li>
                    </b>
                    </ul>
            </div>

            <Footer/>
        </div>
    )
}
export default Home