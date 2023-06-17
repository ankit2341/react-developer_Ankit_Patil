import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const [join, setJoin] = useState(false);
  const [list, setList] = useState([
    "accounts",
    "clicks",
    "Products",
    "Sales-pipeline",
    "Sales_teams",
  ]);
  const [rightValue, setRightvalue] = useState([]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    let value = e.target.innerHTML.split("<p>");
    let value2;
    console.log(value);

    console.log(value2);
    // setRightvalue[]
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      <div className="main_parentdiv">
        <div className="main_parentdiv_child1">
          <img src="./assets/logo.png" style={{ width: "50%" }} alt="logo" />
          <div>
            <img src="./assets/home_1.png" alt="" />
            <span>Home</span>
          </div>
          <p>Social Data</p>
          <div>
            <img src="./assets/twitter_1.png" alt="" />
            <span>Twitter</span>
          </div>
          <p>Customer Data</p>
          <div
            style={{
              background: "green",
              color: "white",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          >
            <img src="./assets/crm_2.png" alt="" />
            <span>CRM</span>
          </div>
        </div>

        <div className="main_parentdiv_child2">
          <div className="main_parentdiv_child2_top">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <input type="search" placeholder="type to search" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <img
                src="./assets/crm_1.png"
                style={{ width: "20px", height: "20px",marginLeft:"10px" }}
                alt=""
              />

              <img
                src="./assets/twitter_1.png"
                style={{ width: "20px", height: "20px",marginLeft:"10px" }}
                alt=""
              />

              <img
                src="./assets/home_1.png"
                style={{ width: "20px", height: "20px" ,marginLeft:"10px"}}
                alt=""
              />
            </div>

            <div className="user_details">
              <img src="./assets/profile_pic.png"   style={{ width: "50px", height: "50px",marginLeft:"10px" }} alt="" />
              <span>Hello, John doe</span>
            </div>
          </div>
          <div className="main_parentdiv_child2_bottom">
            <div style={{ width: "80%", height: "90%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  style={{ width: "40%" }}
                  variant={join ? "success" : "light"}
                  onClick={() => {
                    setJoin(true);
                  }}
                >
                  Join
                </Button>
                <Button
                  style={{ width: "40%", border: "1px solid gray" }}
                  variant="light"
                >
                  Filter
                </Button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {join ? (
                  <>
                    <div className="scrollbar_div">
                      {list.map((el, index) => {
                        return (
                          <div
                            onDragStart={(e) => dragStart(e, index)}
                            onDragEnter={(e) => dragEnter(e, index)}
                            onDragEnd={drop}
                            key={index}
                            draggable
                          >
                            <img src="./assets/table_black.png" alt="" />
                            <p>{el}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="scrollbar_right"></div>
                  </>
                ) : (
                  <p style={{ padding: "50px" }}>"Welcome to crm"</p>
                )}
              </div>
            </div>
            <div className="navbar_right">
              <img src="./assets/crm_1.png" alt="" />

              <img src="./assets/twitter_1.png" alt="" />

              <img src="./assets/home_1.png" alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
