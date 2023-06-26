import { React , useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Admin.css'
import { Modal, ModalBody, Row , Col } from 'reactstrap'; 
import { ModalHeader } from 'reactstrap';
const Admin = () => {
    const [modal,updatemodal] = useState(false)
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({ id:'', name: '', image: '', imagehov: '', size: '',amount:'' });
    useEffect(() => {
     show();
     });
  async function show() {
    var res = await axios.get("https://arshil-eyewear.onrender.com/Eyeglassrangeapi/");
    updatedata(res.data);
  }
  function change(e) {
    updateproduct({ ...product, [e.target.name]: e.target.value });
  }
  return (
    <>
   
    <div> <button className='btn btn-primary m-4' onClick={() => updatemodal(true)} >Add Product</button></div>

   <div>
   <Modal size="md" isOpen={modal} toggle={() => updatemodal(!modal)}>
            <ModalHeader toggle={() => updatemodal(!modal)}>Add Product Details</ModalHeader>
            <ModalBody>
            <form onSubmit={(e) => {
          e.preventDefault();
          async function addData() {
            var res = await axios.post('https://arshil-eyewear.onrender.com/Eyeglassrangeapi/', product);
            if (res.status === 201) {
              alert("product added sucessfully");
              updatemodal(false)
            }
          }
          addData();
        }}>
            <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name">Product Name</label>
                      <input
                        type="text"
                name="name"
                value={product.name}
                 onChange={change}
                placeholder="enter product name"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name">Image-1</label>
                      <input
                        type="url"
                name="image"
                value={product.image}
                 onChange={change}
                placeholder="enter product url-1"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name">Image-2</label>
                      <input
                        type="url"
                name="imagehov"
                value={product.imagehov}
                 onChange={change}
                placeholder="enter product url-2"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name">Product Size</label>
                      <input
                         type="text"
                name="size"
                value={product.size}
                 onChange={change}
                placeholder="enter product size"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name">Product Price</label>
                      <input
                        type="number"
                name="amount"
                value={product.amount}
                 onChange={change}
                placeholder="enter product amount"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='mb-3'>
                      <label htmlFor="course_name"> ID Number ( Current ID Number {data.length} )</label>
                      <input
                        type="number"
                name="id"
                value={product.id}
                 onChange={change}
                placeholder="enter product id"
                autoFocus
                        className="form-control"
                      />
                    </div>
                  </Col>
                  <button className='btn btn-primary' type='submit'  >Add Product</button>
                  </form>
                  <hr></hr>
                  <button className='btn btn-danger m-2' onClick={() =>  updatemodal(false)}> Close </button>
            </ModalBody>
          </Modal>
   </div>

    <hr />
    <table className='table table-bordered text-center table-hover '>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>IMAGE</th>
          <th>IMAGE_HOV</th>
          <th>SIZE</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => {
          return (<tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td><img src={v.image} alt='no_img' className='d-flex w-100 h-100' /></td>
            <td><img src={v.imagehov} alt='no_img' className=' d-flex w-100 h-100' /></td>
            <td>{v.size}</td>
            <td>{v.amount}</td>
            <td><button className='btn btn-danger' onClick={(e) => {
              e.preventDefault();
              async function dltData() {
                var res = await axios.delete(`https://arshil-eyewear.onrender.com/Eyeglassrangeapi/${v.id}`);
                alert("Sucess")
              }
              dltData();
            }}
            >Delete</button></td>
            {/* <td><button className='btn btn-success' onClick={(e) => {
              e.preventDefault();
              async function dltData() {
                var res = await axios.put('https://arshil-eyewear.onrender.com/Eyeglassrangeapi/');
                alert("Sucess")
              }
              dltData();
            }}
            >update</button></td> */}
          </tr>)
        })}

        
      </tbody>
      
    </table>

  </>

  )
}

export default Admin