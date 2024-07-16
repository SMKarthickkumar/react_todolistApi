
import ItemList from "./ItemList"


const Content = ({state, handleClick, handleDeleteClick}) => {

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

  

  return (
    <main>
        
        {/* <p>Let's Welcome</p>
         <button onClick={handleEvent}>Subscribe</button> 
        <p>Subscribe <span>{count}</span></p>
        <button style={{width: '10%'}} onClick={IncrementFunction}> + </button><br></br>
        <button style={{width: '10%'}} onClick={DecrementFunction}> - </button> */}
        {(state.length) ? (
            <ItemList
              state={state}
              handleClick={handleClick}
              handleDeleteClick={handleDeleteClick}
            />
        ) : (
          <p style={{marginTop: '4rem'}}> Your list is Empty</p>
        )
        }
       
    </main>
  )
}

export default Content