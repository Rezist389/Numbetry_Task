import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function CreateUser() {
 
    const [prod_Name, setprod_Name] = useState()
    const [prod_id, setprod_id] = useState()
    const [prod_price, setprod_price] = useState()
    const [prod_desc, setprod_desc] = useState()
 
    const navigate = useNavigate()
 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', {prod_Name, prod_id, prod_price, prod_desc})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">prod_Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              onChange={(e) => setprod_Name(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_id</label>
            <input
              type="int"
              placeholder="Enter Product ID"
              className="form-control"
              onChange={(e) => setprod_id(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_price</label>
            <input
              type="int"
              placeholder="Enter Product Price"
              className="form-control"
              onChange={(e) => setprod_price(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_desc</label>
            <input
              type="text"
              placeholder="Enter Product desc"
              className="form-control"
              onChange={(e) => setprod_desc(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateUser;