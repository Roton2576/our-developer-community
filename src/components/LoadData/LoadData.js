import React, { useEffect, useState } from 'react'
import AddedDev from '../AddedDev/AddedDev';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './LoadData.css'

const LoadData = () => {
     const [devlopers, setDevleper] = useState([])
     const [cart, setCart] = useState([])

     useEffect(() => {
          fetch('./fakeData.JSON')
          .then(res => res.json())
          .then(data => setDevleper(data))
     }, [])

     const clickAddCartBtn = (btnClick) => {
          const newCart = [...cart, btnClick];
          setCart(newCart);
     }

     return (
          <div>
               <Header />
               <div className="row container">
                    <div className="allContainer col-md-9">
                              
                         {
                              devlopers.map(developer => <Cart
                              key={developer.id}
                              developer={developer}
                              clickAddCartBtn={clickAddCartBtn}
                              />)
                         }

                    </div>
                    <div className="col-md-3">
                         <AddedDev 
                         cart={cart}
                         />
                    </div>
               </div>

          </div>
     )
}

export default LoadData;
