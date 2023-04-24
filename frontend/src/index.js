import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx"
import Land from "./components/routes/Land.jsx";
import Rdash from "./components/routes/Rdash.jsx";
import Register from "./components/routes/register/Register.jsx";
import Login from "./components/routes/login/Login.jsx";
import Dash from "./components/dash/Dash.jsx";
import Dashboard1 from "./components/dash/Dashboard.jsx";
import Dashboard from './components/dashboard.js'
import { render } from "react-dom";
import Profit from "./components/dash/profit/Profit.jsx";
import Transact from "./components/dash/transaction/Transact.jsx";
import Plansec from "./components/dash/planSection/Plansec.jsx";
import Withdraw from "./components/dash/withd/Withdraw.jsx";
import Invest from "./components/dash/deposit/Invest.jsx";
import "./index.css"
import "./app.css";

class App1 extends React.Component {
    render() {
      return (
        <div className="AppContainer">
          <Dashboard />
        </div>
      );
    }
  }

//   render
(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App1/>
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Land/>} /> 
                <Route path="register" element={<Register/>} />
                <Route path="login" element={<Login/>} />
                <Route path="dashboard" element={<Dash />}>
                    <Route path="" element={<Dashboard1/>}/>
                    <Route path="profits" element={<Profit/>}/>
                    <Route path="transactions" element={<Transact/>}/>
                    <Route path="plans" element={<Plansec/>}/>
                    <Route path="invest" element={<Invest/>}/>
                    <Route path="withdraw" element={<Withdraw/>}/>
                </Route>
                <Route path="*" element={<Rdash />} />
            </Route>
        </Routes>
    </Router>
 );

