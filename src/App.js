import React, { useState } from "react";
function App() {
  //Use State with Objects
  // const [values,setValues]=useState({fname:"Safi",lname:"Ullah"});
  // function update()
  // {
  //   setValues({...values,fname:"Fatim"})
  // }
  // ... create copy of object first and then overwrite the values of that object key

  //Use State with Arrys
  const [items,setItems]=useState([]);
  function additems()
  {
    setItems([
      ...items,{
        id:items.length,
        object:"Pen"
      }
    ])
  }
  return (
    <div>
      {/*<h1>Use State with Object </h1>

    <h2>First name is {values.fname} and Last name is {values.lname}</h2>
    <button onClick={update}>Update</button>
    */}


      <h1>Use State with Arrays </h1>
      <ol>
      {
        items.map((elements=>{
          return(
            <li key={elements.id}> {elements.object}</li>
          )
        }))
      }
      <button onClick={additems}>Add Items</button>
      </ol>
    </div>
  );
}

export default App;
