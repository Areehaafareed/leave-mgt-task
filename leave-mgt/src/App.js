
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LeaveManagement from './components/LeaveManagement';




function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/dashboard' element={
           <Dashboard />
      }>
        <Route path='/dashboard/leaveManagement'  element={
          <LeaveManagement/>
          }></Route>
      </Route>
     
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
