
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JobForm from './component/JobForm';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="">
      
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
           <Route path="/login" element={<LoginPage />} />
          <Route path="/post-job" element={<JobForm />} />
          <Route path="/register" element={<RegisterPage />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
