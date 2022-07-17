import React, { useEffect, useState } from "react";
import "./Menu.css";

const Menu = ({ visible, toggleMenu }) => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setMenuActive(visible);
    console.log("work menu");
  }, [visible]);

  if (!visible) {
    return null;
  }
  return (
    <div className="menuCover ">
      <div className={`innerMenu ${menuActive && "active"}`}>
        <div className="flexMenu">
          <div className="menuContent">
            <button onClick={() => toggleMenu(false)}>Закрыть</button>
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
              <h3>MENU</h3>
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

export default Menu;
