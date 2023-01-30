import "./todo.css";
import { useState } from "react";
function Todo() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const modify = (args) => {
    if (!args) {
      alert("enter any value");
    } else {
        const myNew={
           
            id: new Date().getTime().toString(),
            name: args,
            checked:false
        }
      const update = [...list, myNew];
      setList(update);
      setValue("");
    }
  };
  const remover = (index) => {
    const nu = list.filter((currelm) => { return currelm.id !== index });
    setList(nu); 
  };
  const editer = (lc)=>{
    list.filter((elem)=>{
        if(elem.id===lc){
        }

    })
  }



  const fun= ()=>{
    

  }
  //   const l = list.map((items) => {
  //     return (
  //       <div className="output"   >
  //         <button>edit</button>
  //         <p className="Content">{items}</p>
  //         <button  onClick={(event)=>{remover(event.target)}} >remove</button>
  //       </div>
  //     );
  //   });
  return (
    <>
      <div className="first">
        <h2>Add Todo List</h2>
      <div className="input">
        <input
          type="text"
          value={value}
          id=""
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            modify(value);
          }}
        >
          Add list
        </button>
      </div>

      <div className="put">
        {list.map((items) => {
          return (
            <div className="output"  key={items.id}>
              <input type="checkbox"checked={items.checked}  className="check"/>
              <p className= {items.checked ? "striked": ""}  >{items.name}</p>
              <button
                onClick={ () => remover(items.id) }>
                remove
              </button>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
};

export default Todo;
