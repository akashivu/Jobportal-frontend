import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JobForm from './component/JobForm';
import RegisterPage from './pages/RegisterPage';
import JobPage from './pages/JobPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobPage />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
