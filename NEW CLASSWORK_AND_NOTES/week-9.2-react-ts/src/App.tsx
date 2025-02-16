import './App.css'

function App() {

  return (
    <div>
      <Todo title='This is todo title' description='this is todo description'/>
    </div>
  )
}


// interface are used when we need to implement the structure into a class and you can use nterfaces t aggregate the collection of data
interface todoProps{
  title:string,
  description: string,
}

// Types: we can define multiple types for the same ex types arg = (number | string) this is the property of join in types which is nto available in interfaces
// types Employee = {
//   name:string,
//   startDate: number;
// }
//  types Manager = {
//   name: string,
//   department: string,
//  }

// type TechLead = Employee & Manager;

// // or this can be written as

// type TechLead = {
//   name:string,
//   department:string,
//   startDate:number,
// }


function Todo(props:todoProps){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>
}
export default App
