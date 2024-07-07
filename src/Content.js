import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa"


const Content = () => {

//#region
  //  function getRandomName(){
  //    const name = ["one","two","five"];
  //    const int = Math.floor(Math.random()*3);
  //    return name[int];
  //  }

//    const handleEvent = (e) => {
//     console.log(e);
//     console.log(e.target);
//    }
//    const handleEvent1 = (message) => {
//     console.log(`Hi karthick1 ${message}...`);
//    }

    // const [count, setCount] = useState(0);

    // function IncrementFunction() {
    //     setCount(prevcount => prevcount + 1);
    //     setCount( (prevcount) => {return prevcount + 1 } )
    // }

    // function DecrementFunction() {
    //     setCount(prevcount => prevcount - 1);
    // }
//#endregion

  const [state, setState] = useState(
    [
      {
        id: 1, checked : true, comment: "practice test-1"
      },
      {
        id: 2, checked : false, comment: "practice test-2"
      },
      {
        id: 3, checked : true, comment: "practice test-3"
      }
    ]
  )

  const handleClick = (id) => {
    const listItem = state.map((item) => (
      item.id === id ? {...item, checked : !item.checked} : item
    ))
    setState(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  const handleDeleteClick = (id) => {
    const listItem = state.filter((item)=> item.id !== id);
    setState(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  return (
    <main>
        
        {/* <p>Let's Welcome</p>
         <button onClick={handleEvent}>Subscribe</button> 
        <p>Subscribe <span>{count}</span></p>
        <button style={{width: '10%'}} onClick={IncrementFunction}> + </button><br></br>
        <button style={{width: '10%'}} onClick={DecrementFunction}> - </button> */}
        {(state.length) ? (
          <ul>
            {state.map((item) => (
              <li className='item' key={item.id}>
                <input
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => handleClick(item.id)}
                ></input>
                <label
                style={(item.checked) ? 
                {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleClick(item.id)}
                >{item.comment}</label>                
                <FaTrash 
                  role='button'
                  tabIndex="0"
                  onClick={() => handleDeleteClick(item.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p> Your list is Empty</p>
        )}
       
    </main>
  )
}

export default Content