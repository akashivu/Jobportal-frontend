
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JobForm from './component/JobForm';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import JobPage from "./pages/JobPage";
import JobList from './component/JobList';
import About from './component/about';
import Companies from './component/companies';
function App() {
  return (
    <Router>
      <div className="">
      
        <Routes>
            <Route path='/' element={<HomePage/>}/>
           <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<JobForm />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/jobs" element={<JobPage />} />
            <Route path="/joblist" element={<JobList />} />
            <Route path="/about" element={<About />} />
             <Route path="/companies" element={<Companies />} />

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
