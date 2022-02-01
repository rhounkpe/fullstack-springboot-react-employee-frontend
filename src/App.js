import './App.css';
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./components/statefull/HeaderComponent";
import FooterComponent from "./components/statefull/FooterComponent";
import EmployeeListComponent from "./components/stateless/EmployeeListComponent";
import EmployeeCreateComponent from "./components/stateless/EmployeeCreateComponent";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <div className="container">

                <Routes>
                    <Route exact path="/" element={<EmployeeListComponent />}/>
                    <Route path="/employees" element={<EmployeeListComponent />}/>
                    <Route path="/add-employee" element={<EmployeeCreateComponent />}/>
                    <Route path="/edit-employee/:id" element={<EmployeeCreateComponent />}/>
                </Routes>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
