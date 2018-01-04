import React from 'react';

export const Main = (props) => {
  return(
    <div>
      <h1>The Main Page</h1>
      <button onClick={() => props.changeUsername()} className="btn btn-primary">Change the username</button>
      <div> 
        {/* <input onChange={(event) => event.target.value} type="text" value={(event) => event.target.value} placeholder="enter name here..."/> */}
      </div>
    </div>
  );
}
