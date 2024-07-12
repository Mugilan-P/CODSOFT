import { useNavigate } from "react-router-dom";

function Footer()

{
  const navigation = useNavigate();
    return(
        <div>
            <div className="container my-5">
          <footer
                  className="text-center text-lg-start text-black"
                  style={{backgroundColor:"red"}}
                  >
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      JOB BOARD
                    </h6>
                    <p>
                    Job Board is the World's largest online job service agency trusted by over 
                    35 million happy users globally.Here we can apply jobs without any payments and,
                    we can recrute candidates without any kind of membership.This site is full of free.
                    Our mobile available in both appstore and IOS.                  
                    </p>
                  </div>
                  <hr className="w-100 clearfix d-md-none" />
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Top MNC companies</h6>
                    <p>
                      <a className="text-black nav-link">Microsoft</a>
                    </p>
                    <p>
                      <a className="text-black nav-link">Google</a>
                    </p>
                    <p>
                      <a className="text-black nav-link">TCS</a>
                    </p>
                    <p>
                      <a className="text-black nav-link">BMW</a>
                    </p>                    
                    <p>
                      <a className="text-black nav-link">lenovo</a>
                    </p>
                    <p>
                      <a className="text-black nav-link">Infosys</a>
                    </p>
                  </div>
        
                  <hr className="w-100 clearfix d-md-none" />
        
                  <hr className="w-100 clearfix d-md-none" />
        
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i className="fas fa-home mr-3"></i> Job Board Headoffice, Coimbatore, Tamil Nadu, India</p>
                    <p><i className="fas fa-envelope mr-3"></i> jobboard@gmail.com</p>
                    <p><i className="fas fa-phone mr-3"></i> 9042117381</p>
                    <p><i className="fas fa-print mr-3"></i> 8825690200</p>
                    <p><i className="fas fa-print mr-3"></i> 9361095126</p>
                  </div>
        
                  
                </div>
              </section>
            </div>
        
            <div
                 className="text-center p-3"
                 style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                 >
               Copyright ©
              <a className="text-white" href="" onClick={()=>navigation("/home")}
                 >Job Board</a>
                {new Date().getFullYear()}
            </div>
          </footer>
        </div>
        </div>
    )
}
export default Footer