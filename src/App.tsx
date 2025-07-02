import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
	)
}

export default App
