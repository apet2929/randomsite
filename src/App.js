// import React from 'react';
// import ReactDOM from 'react-dom'
// import './App.css';
// import { useForm } from "react-hook-form";

// function App() {
//     const name = new Name("Yee");
//     const {register, handleSubmit } = useForm();
//     const onSubmit = data => {
//         name.setName(data.name);
//     };
//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input defaultValue="test" {...register("name")} />

//                 <input type="submit" />
//             </form>
//             { name }
//         </>
//     );
// }

// class Name extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             yee: "",
//         };
//     }
//     render(){
//         return(
//             <p>{this.state.yee ? "Test" : this.state.yee}</p>
//         )
//     }
//     setName(name){
//         this.setState({
//             yee: name,
//         });
//     }
    
// }

// export default App;
