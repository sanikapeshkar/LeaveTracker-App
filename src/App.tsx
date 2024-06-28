import { Component, ReactNode } from "react";
import "./App.module.scss";
// import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Dashboard from "./components/Dashboard/DashboardClass.tsx";
// function App() {
//   return (
//     <>
     
//     </>
//   );
// }



class App extends Component<{},{}>{


  render(): ReactNode {
    return(
      <>  <Dashboard /></>
    )
  }
}


export default App;
