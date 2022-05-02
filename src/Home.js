// import React from "react";
// import './App.css';
// class App extends React.Component {
   
//     // Constructor 
//     constructor(props) {
//         super(props);
   
//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }
   
//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         const tokenn = localStorage.getItem("accessToken");
// 	//  const token = JSON.parse(tokenn);
//      console.log(tokenn)
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div> ;
   
//         return (
//         <div className = "App">
//             <h1> Fetch data from an api in react </h1>  {
//                 items.map((item) => ( 
//                 <ol key = { item.id } >
//                     User_Name: { item.username }, 
//                     Full_Name: { item.name }, 
//                     User_Email: { item.email } 
//                     </ol>
//                 ))
//             }
//         </div>
//     );
// }
// }
import React from 'react';
const App = () => {
    const json = localStorage.getItem("id");
    const id = JSON.parse(json);
    const tokenn = localStorage.getItem("accessToken");
    const token = localStorage.getItem("accessToken");
    const [result, setResult] = React.useState();
    
  React.useEffect(()=>{
    fetch(`https://fathomless-gorge-60238.herokuapp.com/interventions/${id}`, {
      method: "GET",
      mode: 'no-cors',
      credentials: 'include',
      headers: {"Content-Type": "application/x-www-form-urlencoded",'Authorization': `Bearer ${token}`, "Access-Control-Allow-Origin" : "*","Access-Control-Allow-Credentials" : true }
    }).then(res => res.json()).then(json => setResult(json));
  },[]);

  return (
    <>
      {JSON.stringify(result)}
    </>
  );
};      
export default App;
