import React, {useState} from "react";
import Create from "./Create";


function Mange() {
  const [showLogin, setShowLogin] = useState(false);
  const [empdata, setempdata] = useState(false);
  
  const UserDetails= JSON.parse(localStorage.getItem('formData'))
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Employees</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Employees</li>
              </ol>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => setShowLogin(true)}
          style={{ width: "100%", maxWidth: "200px", marginLeft: "1400px" }}
        >
          ADD EMPLOYEE
        </button>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Employee</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>#</th>
                  <th style={{ width: "20%" }}>Employee Name</th>
                  <th style={{ width: "30%" }}>Email</th>
                  <th>Contact No</th>
                  <th style={{ width: "8%" }} className="text-center">
                    Status
                  </th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody >

              {UserDetails?.map((row, index) =>(
                <tr key={index}>
                   <td>#</td>
                   <td>{row.fullName}</td>
                   <td>{row.Email}</td>
                   <td>{row.Contact}</td>
                   <td>Active</td>
                   <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm mr-2" href="/">
                      <i className="fas fa-folder mr-2"></i> View
                    </a>
                    <button className="btn btn-info btn-sm mr-2"  data-toggle="modal" data-target="#modal-default" onClick={()=>setempdata(row)}  >
                      <i className="fas fa-pencil-alt mr-2"></i> Edit  
                    </button>
                    <a className="btn btn-danger btn-sm mr-2" href="/">
                      <i className="fas fa-trash mr-2"></i> Delete
                    </a>
                  </td>
                  </tr>
              ))}
              </tbody>
             
            </table>
          {!UserDetails ?<p style={{marginLeft:"700px",height:"50px", paddingTop:"20px"}}>No Data Available</p> :''
          }  
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </section>
      <Create show={String(showLogin)} data={empdata} close={() => setShowLogin(false)} />
      {/* <Details data={empdata} close= {()=> edit('')}/> */}
      {/* /.content */}
    </div>
  );
}

export default Mange;
