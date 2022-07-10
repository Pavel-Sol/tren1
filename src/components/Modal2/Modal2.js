import React from "react";
import "./Modal2.css";

const Modal2 = ({ visible, toggleModal2 }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal2Cover ">
      <div className="inner2">
        <div className="flex2">
          <div className="modal2Content">
            <button onClick={() => toggleModal2(false)}>Закрыть</button>
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

export default Modal2;
