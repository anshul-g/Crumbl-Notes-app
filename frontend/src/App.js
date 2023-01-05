import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login.js';
import MainContent from '../src/components/MainContent.js';
import { AuthProvider } from './utils/AuthContext.js';
import '../src/styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
