import React from 'react'
import './ProductList.css'

const ProductList = () => {
  return (
    <>
      <h1 className="title">PRODUCTS</h1>
      <div className="products">
        <div className="product">
          <a href="#">
            <div className="productImg">
              <img src={"https://1.bp.blogspot.com/-LAAIMgwOqyU/Ubrz2nz2KhI/AAAAAAAAAIo/lbW4Mg33JSE/s320/munch_el_grito.jpg"} alt="product" />
            </div>
          </a>
          <div className="productFooter">
            <h1> Title </h1>
            <p> Category </p>
            <p> Artist </p>
            <p> Year </p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className="btn">BUY</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="productImg">
              <img src={"https://1.bp.blogspot.com/-LAAIMgwOqyU/Ubrz2nz2KhI/AAAAAAAAAIo/lbW4Mg33JSE/s320/munch_el_grito.jpg"} alt="product" />
            </div>
          </a>
          <div className="productFooter">
            <h1> Title </h1>
            <p> Category </p>
            <p> Artist </p>
            <p> Year </p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className="btn">BUY</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="productImg">
              <img src={"https://1.bp.blogspot.com/-LAAIMgwOqyU/Ubrz2nz2KhI/AAAAAAAAAIo/lbW4Mg33JSE/s320/munch_el_grito.jpg"} alt="product" />
            </div>
          </a>
          <div className="productFooter">
            <h1> Title </h1>
            <p> Category </p>
            <p> Artist </p>
            <p> Year </p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className="btn">BUY</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <a href="#">
            <div className="productImg">
              <img src={"https://1.bp.blogspot.com/-LAAIMgwOqyU/Ubrz2nz2KhI/AAAAAAAAAIo/lbW4Mg33JSE/s320/munch_el_grito.jpg"} alt="product" />
            </div>
          </a>
          <div className="productFooter">
            <h1> Title </h1>
            <p> Category </p>
            <p> Artist </p>
            <p> Year </p>
            <p className="price">€320</p>
          </div>
          <div className="buttom">
            <button className="btn">BUY</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList