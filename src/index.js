import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useForm } from "react-hook-form";

class App extends React.Component {
  constructor(props) {
    super(props);
    // localStorage.setItem("items", JSON.stringify(["yee", "2"]));
    let items = JSON.parse(localStorage.getItem("items"));
    this.state = {
      items: items ? items : [],
    };
  }

  onSubmit = (data) => {
    let yee = this.state.items;
    yee.push(data.inputItem);
    this.setState({
      items: yee,
    });
    localStorage.setItem("items", JSON.stringify(yee));

  };

  render() {
    let deleteItem = (item) => {
      console.log(item);
      let yee = this.state.items;
      console.log(yee);
      for(var i = 0; i < yee.length; i++){
        if(yee[i] === item.props.name){
          yee.splice(i, 1);
        }
      }
      this.setState({
        items: yee,
      });
      localStorage.setItem("items", JSON.stringify(yee));
      console.log(yee);
      console.log("done");
    }
    let names = this.state.items.map((yee) => {
      return <Item name={yee} delete={deleteItem} />;
    });
    
    return (
      <>
        <Form onSubmit={this.onSubmit} />
        {names}
      </>
    );
  }
}

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <input {...register("inputItem")} />

      <input type="submit" />
    </form>
  );
}

class Item extends React.Component{
  
  render(){
    let deleteSelf = () => {
      this.props.delete(this);
    };
    return(
    <div class="item"> 
      <p class="item">{this.props.name}</p>
      <button onClick={deleteSelf}>Delete</button>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
