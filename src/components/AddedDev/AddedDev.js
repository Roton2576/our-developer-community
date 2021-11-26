import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock} from '@fortawesome/free-solid-svg-icons'
import './AddedDev.css'

const AddedDev = (props) => {
     const {cart} = props;

     let image;
     let name;
     let total = 0;
     for(const onePiche of cart) {
          total = total + onePiche.salary;
          name = onePiche.name;
          image = onePiche.img;
     }
     

     return (
          <div>
               <div className="text-center mt-5 addedBgColor">
                    <h5><FontAwesomeIcon icon={faUserLock} />  Developer added: {cart.length} </h5>
                    <h5> Total Cost: ${total} </h5>
                    <h5 className="mt-4"> <img className="addedImages" src={image} /> Name: {name} </h5>
                    <button className="btn btn-primary mt-4">  Buy Now </button>
               </div>
          </div>
     )
}

export default AddedDev;