import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Login } from "./components/Login/Login";
import'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Register } from './components/Login/Register';
import { Studentform } from './components/student/studentforum';
import { Dashboard} from './components/DashBord/DashBord';
import { EditStudentform } from './components/DashBord/updatestudentdata';
function App() {
  return (
<>    
<BrowserRouter>
<Routes>
<Route path='/'element={[<Login/>]}/>
<Route path='/login'element={[<Login/>]}/>
<Route path='/signup'element={[<Register/>]}/>
<Route path='/studentform'element={[<Studentform/>]}/>
<Route path='/dashboard/:teacherid'element={[<Dashboard/>]}/>EditStudentform
<Route path='/Studentform/:teacherid'element={[<Studentform/>]}/>
<Route path='/Studed/:teacherid/:idstudent'element={[<EditStudentform/>]}/>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
