import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
     const {name, profession, age, img, country, id, salary } = props.developer;
     return (
          <div>
              <div className="imgContainer">
                   <div className="allProperiCon">
                        <div className="imgHead">
                         <img src={img} alt="" />
                        </div>
                        <h5><span className="fw-bold"> Name: &nbsp; </span> {name} </h5> <hr />
                        <h5><span className="fw-bold"> prof: &nbsp; </span> {profession} </h5>
                        <h5><span className="fw-bold"> Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> {age} </h5>
                        <h5><span className="fw-bold"> Country: &nbsp; </span> {country} </h5>
                        <h5><span className="fw-bold"> Salary: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> ${salary} </h5>
                        <div className="text-center">
                        <button onClick={() => props.clickAddCartBtn(props.developer)} className="btn btn-primary mt-3"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                        </div>
                    </div>
              </div>
          </div>
     )
}

export default Cart;