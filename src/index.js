import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useForm } from "react-hook-form";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      yee: "",
    };
  }

  onSubmit = (data) => {
    this.setState({
      yee: data.name,
    });
    console.log(data);
  }

  render(){
    
    return (
        <>
            <Form onSubmit={ this.onSubmit }/>
            <Name name={ this.state.yee } />
        </>
    );
  } 
}

function Form(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input defaultValue="test" {...register("name")} />

      <input type="submit" />
    </form>
  )
}

function Name(props) {
  return(
    <p>{ props.name }</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

