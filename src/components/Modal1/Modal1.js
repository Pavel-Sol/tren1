import React from "react";
import "./Modal1.css";

const Modal1 = ({ visible, toggleModal1 }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal1Cover ">
      <div className="inner1">
        <div className="flex1">
          <div className="modal1Content">
            <button onClick={() => toggleModal1(false)}>Закрыть</button>
            <h1>modal-111</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo molestiae
              laudantium quam voluptatum velit sunt expedita labore, atque, pariatur corporis
              dignissimos voluptatem molestias hic! Repudiandae aliquid nemo illum est?
            </p>

            <div className="form">
              <input type="text" placeholder="имя" />
              <input type="email" placeholder="email" />
              <button>отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
