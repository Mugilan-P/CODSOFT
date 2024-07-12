import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "sonner";

function Dashboard() {
  const [register, setRegister] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const photo = localStorage.getItem("profilePhoto");
    if (user && user.id) {
      setRegister(user);
      if (photo) {
        setProfilePhoto(photo);
      }
    } else {
      navigate("/login"); // Redirect to login if no user data is found
    }
  }, [navigate]);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePhoto", reader.result);
      setProfilePhoto(reader.result);
      setShowModal(false);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    localStorage.removeItem("profilePhoto");
    setProfilePhoto(null);
    setShowModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar" style={{ background: "linear-gradient(90deg,#e0d43e,#da61ff)" }}>
          <div className="position-sticky pt-3">
            
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="" onClick={() => navigate("/home")}>
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/jobs")}>
                  <b>Jobs</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/login")}>
                  <b>Login</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={() => navigate("/register")}>
                  <b>Register</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ background: "linear-gradient(90deg,#0062ff,#da61ff)", minHeight: "85vh" }}>
          {register ? (
            <div className="card mt-4" style={{background: "linear-gradient(90deg,#70fe53,#00d4ff)"}}>
              <div className="card-header bg-primary text-white">
                <h3>My Profile</h3>
              </div>
              <div className="card-body" >
              <div className=" mb-4 position-relative">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="img-thumbnail" style={{ width: "150px", height: "150px", objectFit: "cover", cursor: "pointer" }} onClick={() => setShowModal(true)} />
              ) : (
                <div className="img-thumbnail" style={{ width: "150px", height: "150px", lineHeight: "150px", textAlign: "center", background: "#f8f9fa", cursor: "pointer" }} onClick={() => setShowModal(true)}>
                  No Photo
                </div>
              )}
            </div>
                <p><strong>Role:</strong> {register.empJs}</p>
                <p><strong>First Name:</strong> {register.firstName}</p>
                <p><strong>Last Name:</strong> {register.lastName}</p>
                <p><strong>Email:</strong> {register.email}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("profilePhoto");
                    navigate("/login");
                    toast.error("logout successfully")
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile Photo</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="img-fluid" />
                ) : (
                  <p>No photo uploaded</p>
                )}
              </div>
              <div className="modal-footer">
                {profilePhoto ? (
                  <button className="btn btn-danger" onClick={handleRemovePhoto}>Remove Photo</button>
                ) : (
                  <>
                    <input type="file" id="fileInput" className="d-none" onChange={handlePhotoUpload} />
                    <button className="btn btn-primary" onClick={() => document.getElementById("fileInput").click()}>Upload Photo</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
