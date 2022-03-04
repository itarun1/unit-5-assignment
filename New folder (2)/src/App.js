import logo from './logo.svg';
import './App.css';

function App() {
  // const name="Tarun";
  // const data=["google","facebook","amazon"]
  // const age=20;
  // const data=[
  //   {name:"tarun",age:10},
  //   {name:"Jack",age:40},
  //   {name:"Jill",age:20},
  //   {name:"Jenna",age:70},
  // ]
  const data=[
    {
      head:"Mobile Operating System",
      p1:"Android",
      p2:"Blackberry",
      p3:"iPhone",
      p4:"Windows Phone"
    },
    {
      head:"Mobile Manufacturers",
      p1:"Samsung",
      p2:"HTC",
      p3:"Micromax",
      p4:"Apple"
    }
  ]
  // return <div>{data.map((user)=> User(user))}</div>

return (<div>
  {
    data.map((user)=>(
      <UserComponent head={user.head}
      p1={user.p1}
      p2={user.p2} 
      p3={user.p3}
      p4={user.p4}
      />
    ))
  }
</div>)


  // (
//     <div className='App'>
//       <h1>Hello Masai School</h1>
//       <div>
//       you worked for:{data.map((e)=>(<p>{e}</p>) 
//       )}
//     </div>
//     <div>
// your age is:{age>10? "valid":"invalid"}
//     </div>
//     </div>

   
  // );
  function UserComponent({head,p1,p2,p3,p4})
  {
    return( <div>
      <h2>{head}</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <li>{p4}</li>
      </ul>
      </div>)
   
  }
}

export default App;
