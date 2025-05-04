import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white shadow-lg p-6 fixed h-full">
          <h1 className="text-3xl font-bold mb-10 text-blue-600">✨ TodoMaster</h1>
          <nav className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center px-5 py-4 text-2xl font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
            >
              <span className="mr-3">🏠</span> Home
            </Link>
            <Link 
              to="/about" 
              className="flex items-center px-5 py-4 text-2xl font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
            >
              <span className="mr-3">ℹ️</span> About
            </Link>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-64 p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}