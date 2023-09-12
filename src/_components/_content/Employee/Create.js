import React, { useState } from "react";
import "./Create.css";
import Swal from "sweetalert2";
function Create(props) {
    // const [isModalOpen, setIsModalOpen] = useState(props.show.toString());
  const User= props.data
  console.log(User)
  console.log('props',props)
 
  let [formData, setFormData] = useState({
    fullName: User?User.fullName:'',
    Email: '',
    Contact:'',
    });
  if(User){
    formData= User
    }
 let handleChange=(event)=>{
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  console.log(event)
  }
  let UserDetails=[]
 const localdata=(JSON.parse(localStorage.getItem('formData')))?JSON.parse(localStorage.getItem('formData')):[]
  const [data, setData] = useState(localdata); 
  
  console.log('data',data)
  localStorage.setItem('formData',[ data])
  console.log('data1',[localdata])
  console.log('localStorage',JSON.parse(localStorage.getItem('formData')))
  //setData([])

let ADDEmployee=(event)=>{
   event.preventDefault();
 
   console.log('UserDetails1',data)
  Swal.fire({
    title: 'Submited!',
    text: 'You are registered successfully!!',
    icon: 'success',
  },
  setTimeout(() => {
  window.location.reload();
}, 2000)
  );
  let UserData = JSON.stringify(formData)
  // PUSH DATA INTO EXISTING ARRAY 
  
  setData(UserDetails => [...UserDetails, JSON.parse(UserData)]);
  console.log('UserDetails1',UserDetails)
  // SET TO LOCAL

  // EMTY THE FORM 
  setFormData({
    fullName: '',
    Email: '',
    Contact:''
  });
 window.location.reload()
 }
 const close=()=>{
    window.location.reload()
 }
  if (!props.show) return null;
  return (
    <div>
      <div
        className="modal fade"
        id="modal-default"
        show={props.show}
        // closeButton={setLoginModalShow}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={ADDEmployee}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="fullName"
                      placeholder="Enter Full Name"
                      value={formData.fullName} onChange={handleChange }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="Email"
                      placeholder="Enter Email"
                      value={formData.Email} onChange={handleChange }
                    />
                  </div>  
                   <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact No.</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="Contact"
                      placeholder="Enter Contact Number"
                      value={formData.Contact} onChange={handleChange }
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                     IsAdmin
                    </label>
                  </div>
                </div>

                <div className="modal-footer justify-content-between" >
                <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
               onClick={close}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" 
            //   onClick={() => setIsModalOpen(false)}
              >
                Save changes
               </button>
                </div>
              </form>
            </div>
           
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </div>
  );
}

export default Create;
