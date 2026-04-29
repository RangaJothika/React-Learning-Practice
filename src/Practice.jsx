//Creating React elements with createElement
export const reactHeading = React.createElement("h1", { className: "head", id: "reactHead" }, "hello React");
export const jsxHeading = <><h1>hi</h1> <p>this is a jsx Para</p></>;

// React functional Components
export function App(){
    return <h1>React Functional Component</h1>;
}
export let Sum=()=> <><h1>Arrow fn in Functional Components</h1><p>bye</p></>;

//React Class Components
import React from "react";
class App1 extends React.Component {
    constructor() {
        super();
        this.state ={"product":
        [
            { "id":1,"heading": "Class component1","title":"Title1" },
            {"id":2,"heading": "Class component2","title":"Title2"}
        ]
    }
    }
    render() {
        return <div>heading {this.state.product.map(p => (
  <h2 key={p.id}>{p.title}</h2>//id is used as a key for react internal identifying 
))}</div>
    }
}
export default App1;

//Class Component Setstate()-update state
// import React from "react";--already imported above
export class Set extends React.Component{
    constructor(){
        super();
        this.state={count:0,showChild:true};
    }
    inc=()=>{
        this.setState({count:this.state.count+1});//enough to mention which prop is changing,not all the props in state
    }
    toggle=()=>{
this.setState({showChild:!this.state.showChild});
    }
    componentDidMount(){
        console.log("Component Mounted");
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    componentWillUnmount(){
        console.log("Component Unmounted");
    }
    render(){
        return <>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.toggle}>{this.state.showChild ? "Hide Child" : "Show Child"}</button>
        {this.state.showChild&&<StateChild />}
        </>
        // in the last line above,it is and operator if showchild is true, child comopnent will be rendered
    }
}
class StateChild extends React.Component{
    componentDidMount(){
        console.log("Component Mounted");
    }
      componentWillUnmount(){
        console.log("Component Unmounted");
    }
    render(){return <h1>Child</h1>};
}

//Update State using Functional Components
import {useState,useEffect} from "react";
export function Update(){
    const [count,setCount]=useState(0);
    const inc=()=>{setCount(count+1)}
    const dec=()=>{setCount(count-1)}
    const reset=()=>{setCount(0)}
    useEffect(()=>{
console.log("Count mounted/updated"); 
return ()=>{console.log("Count unmounted/updated")}
    },[count]);
    return <><h1>Count:{count}</h1>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <button onClick={reset}>Reset</button>
    </>
}

//Props in Class Components (Passing data from parent to child with destructuring)
export class Parent extends React.Component{
    Update=()=>{
        console.log("Function props");
    }
render(){
    return <h1><Child name="Jo" mark={90} functionprop={this.Update}/></h1>
}
}
class Child extends React.Component{
    render(){
        const {name}=this.props;
        return <p onClick={this.props.functionprop}>{name} scored {this.props.mark}</p>
    }
}

//Props in Class Components (Passing data from child to parent indirectly(direct not passible))
export class Parent2 extends React.Component{
    Update=(data)=>{
        console.log("Function props"+" "+data);
    }
render(){
    return <h1><Child2 name="Jo" mark={80} functionprop={this.Update}/></h1>
}
}
class Child2 extends React.Component{
    render(){
        const {name}=this.props;
        return <p onClick={()=>{{this.props.functionprop("args")}}}>{name} scored {this.props.mark}</p>
    }
}

//Props in Functional Components (Passing data from parent to child with destructuring)
export function Parent3(){
    return <Child3 name="Prasad" age={30} />
}
function Child3({name,age}){
return <p>{name} is {age} years old</p>
}

//Props in Functional Components (Passing data from child to parent indirectly(direct not passible))
export function Parent4(){
    const Update=(data)=>{
        console.log("Function props"+" "+data);
    }
    return <Child4 name="Prasad" age={30} functprops={Update}/>
}
function Child4(props){
return <p onClick={()=>props.functprops("args2")}>{props.name} is {props.age} years old</p>
}
