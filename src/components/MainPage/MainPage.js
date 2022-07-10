import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useScrollPosition } from "../../useScroll";
import Modal1 from "../Modal1/Modal1";
import Modal2 from "../Modal2/Modal2";
import Modal3 from "../Modal3/Modal3";
import "./MainPage.css";

const MainPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  // const rendersCount = useRef(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // const isShow = currPos.y > prevPos.y
      // if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      // console.log(Math.round(currPos.y));
      setScrollTop(Math.round(currPos.y));
    },
    [],
    null,
    false,
    100
  );

  const [modal1, setModal1] = useState(false);
  const toggleModal1 = (bool) => {
    setModal1(bool);
    if (bool) {
      document.body.classList.add("lock1");
    } else {
      document.body.classList.remove("lock1");
    }
  };

  const [modal2, setModal2] = useState(false);
  const toggleModal2 = (bool) => {
    setModal2(bool);
    if (bool) {
      document.body.classList.add("lock1");
    } else {
      document.body.classList.remove("lock1");
    }
  };

  const [modal3, setModal3] = useState(false);
  const toggleModal3 = (bool) => {
    setModal3(bool);
    if (bool) {
      document.body.style.position = "fixed";
      document.body.style.top = `${scrollTop}px`;
    } else {
      const scrollY = document.body.style.top;
      console.log(scrollY);
      document.body.style.position = "";
      document.body.style.top = "";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };

  return (
    <>
      <Modal1 visible={modal1} toggleModal1={toggleModal1} />
      <Modal2 visible={modal2} toggleModal2={toggleModal2} />
      <Modal3 visible={modal3} toggleModal3={toggleModal3} />
      <div className="container">
        <h1>HEADER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <button onClick={() => toggleModal1(true)} className="btn-modal-1">
          open modal-1
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>

        <button onClick={() => toggleModal2(true)} className="btn-modal-2">
          open modal-2
        </button>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <button onClick={() => toggleModal3(true)} className="btn-modal-3">
          open modal-3
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque qui reprehenderit
          quis quod possimus consequuntur quaerat temporibus, eum iste, numquam aperiam repudiandae?
          Voluptas velit tempore deleniti tempora reiciendis at!
        </p>
      </div>
    </>
  );
};

export default MainPage;
