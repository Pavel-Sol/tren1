import React from "react";
import "./Modal3.css";

const Modal3 = ({ visible, toggleModal3 }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal3Cover ">
      <div className="inner3">
        <div className="flex3">
          <div className="modal3Content">
            <button onClick={() => toggleModal3(false)}>Закрыть</button>
            {/* <p>
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
            </p> */}

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

export default Modal3;
