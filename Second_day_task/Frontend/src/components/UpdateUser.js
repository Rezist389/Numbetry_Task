import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
function UpdateUser() {
    const {id} = useParams()
    
    const [prod_Name, setprod_Name] = useState()
    const [prod_id, setprod_id] = useState()
    const [prod_price, setprod_price] = useState()
    const [prod_desc, setprod_desc] = useState()
     
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://localhost:3001/get/"+id);
                console.log(response);
                setprod_Name(response.data.prod_Name)
                setprod_id(response.data.prod_id)
                setprod_price(response.data.prod_price)
                setprod_desc(response.data.prod_desc)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
     
    const navigate = useNavigate()
 
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/'+id, {prod_Name, prod_id, prod_price, prod_desc})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">prod_Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              value={prod_Name}
              onChange={(e) => setprod_Name(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_id</label>
            <input
              type="int"
              placeholder="Enter Product ID"
              className="form-control"
              value={prod_id}
              onChange={(e) => setprod_id(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_price</label>
            <input
              type="int"
              placeholder="Enter Product Price"
              className="form-control"
              value={prod_price}
              onChange={(e) => setprod_price(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">prod_desc</label>
            <input
              type="text"
              placeholder="Enter Product Description"
              className="form-control"
              value={prod_price}
              onChange={(e) => setprod_desc(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
     );
}
 
export default UpdateUser;