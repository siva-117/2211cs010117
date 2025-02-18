// // function App(){
// //   const handleClick =()=>{
// //     alert("Button Clicked")

// //   };
// //   return(
// //     <button onClick={handleClick}>Click Me</button>
// //   )
// // }
// // export default App;

// // import React,{useState} from "react";

// // function App(){
// //   const[text,setText] = useState("")
  
// //   const handleChange = (event) => {
// //     setText(event.target.value)
// //   }

// //   return(
// //     <div>
// //       <input type="text" value={text} onChange={handleChange}/>
// //       <p>Your Text:{text}</p>
// //     </div>
    
// //   )
// // }
// // export default App;


// import React,{use, useState} from "react";

// function App(){
//   const[isHovered, setIsHovered] = useState(false);
//   const handleMouseEnter=()=>{
//     setIsHovered(true);
//   }
//   const handleMouseLeave=()=>{
//     setIsHovered(false);
//   }

//   return(
//     <div>
//       <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
//       style={{backgroundColor:isHovered ? 'lightblue':'lightgray',color:isHovered ? 'white':'black'}}
//       >Hover</button>

//       {isHovered && <p>Mouse is over the button</p>}
//     </div>
//   )
// }
// export default App;

import React,{useState}from 'react';
import'./App.css';
function App(){
  const[key,setkey]=useState("");
  const handlekeyDown=(event)=>{
    setkey(event.key);

  };
  return(
    <div className="app">
    <h1> welcome to siva it solutions
      </h1> 
    {key &&<h2>Pressed key:{key}</h2>}
    <input type="text" onKeyDown={handlekeyDown} placeholder="pressed here"/>   
    </div>
  )

}
export default App;