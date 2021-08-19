import React from 'react';
import './App.css';
// import { useForm } from "react-hook-form";


var numBlocks = Math.random()*100;
var input = "Hello world!";
console.log(numBlocks);

function refresh(){
  numBlocks = Math.random()*numBlocks;
  numBlocks = Math.round(numBlocks);
  window.location.reload(false);
  console.log("hi");
}

function App() {
  var blocks = []
  for(let i = 0; i < numBlocks; i++){
    blocks.push(Block(i));
  }
  return (
    <>
      <button onClick = {refresh}>
      Refresh
      </button>

      <div className="App">
        {blocks}
      </div>
    </>
  );
}

function Block(index) {
  return (
    <div className="block">
      <p>{index}</p>
    </div>
  );
}

export default App;
