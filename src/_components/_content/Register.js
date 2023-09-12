import React, {useState} from 'react'
import Swal from 'sweetalert2';
import { useNavigate   } from 'react-router-dom';


function Register() {
  const navigate = useNavigate ();
  const [formData, setFormData] = useState({
    fullName: '',
    Email: '',
    Password:'',
    ConfirmPass:''
  });
 let handleChange=(event)=>{
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  console.log(event)
  }

 
let  RegisterUsr=(event)=>{
   event.preventDefault();
  localStorage.setItem('formData', JSON.stringify(formData))
  Swal.fire({
    title: 'Submited!',
    text: 'You are registered successfully!!',
    icon: 'success',
  });
  setFormData({
    fullName: '',
    Email: '',
    Password:'',
    ConfirmPass:''
  });
  navigate('/Manage');
  // <Link to="/Manage" className="nav-link"></Link>
  console.log(formData)
 }
  return (
<div className="hold-transition register-page">
<div className="register-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form onSubmit={RegisterUsr}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange }/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" name="Email" placeholder="Email" value={formData.Email}  onChange={handleChange }/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="Password" placeholder="Password" value={formData.Password}  onChange={handleChange }/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control"name="ConfirmPass" placeholder="Retype password" value={formData.ConfirmPass}  onChange={handleChange }/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="/">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
        <a href="/" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="/" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      {/* <a onClick={Register()} className="text-center">I already have a membership</a> */}
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
</div>

  )
}

export default Register