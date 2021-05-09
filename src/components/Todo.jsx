import React, { useState } from "react";
import img from "../images/list.png";
// import TodoEach from "./TodoEach";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([]);


  const onchange = (e) => {
    setInputData(e.target.value);
  };

  const clickEvent = () => {
    if (!inputData) {
      alert("Please enter some task.");
    } 
    else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setList([...list, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    setList((prevVal) => {
      return prevVal.filter((elem) => {
        return index !== elem.id;
      });
    });
  };


  const deleteAll = () => {
    setList([]);
  };

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <img src={img} alt="todologo" className="img" />
            <figcaption className="text">Add Your Tasks Here 📝 </figcaption>
          </figure>
          <div className="items-box">
            <input
              type="text"
              value={inputData}
              name="text"
              onChange={onchange}
              id="text"
              placeholder="✍Add Items.."
              className="input"
              autoComplete="off"
            />
            
              <i
                className="fas fa-plus icon"
                onClick={clickEvent}
                title="Add Item"
              ></i>
          
            
        
          </div>
          <div className="dynamic-items">

            {list.map((curr) => {
              return (
                <div className="each-item">
                  <h3>{curr.name}</h3>
                <div>
                    <i className="fas fa-trash-alt icon-del" title="Delete Item" onClick={deleteItem}></i>
                </div>
                </div>
               
              )
            })}

          </div>


          <div className="button">
            <button className="btn" type="button" onClick={deleteAll}>
              REMOVE ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
