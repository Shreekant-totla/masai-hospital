import logo from './logo.svg';
import './App.css';
import{Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <div className="App">
        <Route path="/signup" component={<Signup/>}/>
        <Route path="/login" component={<Login/>}/>
        <Route path="/doctor-dashboard" component={<DoctorDashboard/>}/>
      </div>
    </Routes>
  );
}

export default App;
