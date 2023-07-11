import React, {useState} from 'react';

function App(){
  const [count, setCount] =useState(0);
  const time = count >=2 ?'times':'time'; 
  return(
    <div>
      <span>Clicked {count} {time}.</span><br/>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click</button>
    </div>
  )

}

export default App;