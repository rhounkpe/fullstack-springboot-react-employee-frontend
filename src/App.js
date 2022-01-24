import './App.css';
import {Route, Routes} from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<ListEmployeeComponent/>}/>
                    <Route exact path="/employees" element={<ListEmployeeComponent/>}/>
                    <Route exact path="/add-employee" element={<CreateEmployeeComponent/>}/>
                    <Route exact path="/update-employee/:id" element={<UpdateEmployeeComponent/>}/>
                </Routes>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
