// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import Count from "./components/count";
// import Cmpnt from './components/Cmpnt';
// import Counter3 from './components/Counter3';
// import Count3 from './components/count4';
import Comp6 from './components/Comp6';
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
function App() {
  // const [message,setMessage] = useState('')



  // const handleMessage=(data)=>{
  //   setMessage(data)
  // }

  return (
    <div className="App">
      {/* <h1>message:{message}</h1> */}
      {/* <UserContext.Provider value={"shubham"}>
        <ChannelContext.Provider value={"bootcamp"}> */}
          {/* <Cmpnt /> */}
          {/* <Counter3/> */}

          {/* <h1>parent</h1>
          <h2>child:{message}</h2>
          <Count3 onSend={handleMessage}/> */}

          <Comp6/>

        {/* </ChannelContext.Provider>
      </UserContext.Provider> */}

    </div>
  );
}

export default App;
