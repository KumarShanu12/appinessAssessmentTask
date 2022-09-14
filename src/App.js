import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodo } from "./redux/slices/todoSlice";
import "./App.css";
const App = () => {

  const [value, setValue] = useState(""); // state to set the value of input text 
  const todos = useSelector((state) => state.todo.todos); // hook to fetch value from store
  const dispatch = useDispatch(); //hook for dispatching action

//function to add items in todo list

  const handleAdd = () => {
    if(value!==''){dispatch(addTodos(value))}  ;
    setValue("");
  };

//function ends  

//function to delete items from todo list

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

//function ends   

  return (
    <div className="container ">
      <div className="jumbotron text-center">
        <h1
          style={{
            border: "2px solid green",
            backgroundColor: "pink",
            padding: "1rem",
             borderBottomLeftRadius:'1rem',
             borderBottomRightRadius:'1rem'
          }}
        >
          TO DO APPLICATION
        </h1>
      </div>

      <div className="input-group input-group-sm mb-4 mt-4">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Write here ...."
          type="text"
          className="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <button
        onClick={handleAdd}
        style={{ marginLeft: "25%", width: "50%" }}
        type="button"
        className="btn btn-success"
      >
        Add To Todo
      </button>

      {todos &&
        todos.map((items, index) => {
          return (
            <div className={"toDoCard"} key={index}>
              <h6 style={{ padding: "1rem" }}>{items}</h6>
              <button
                onClick={() => handleDelete(index)}
                type="button"
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          );
        })}

    </div>
  );
};

export default App;
