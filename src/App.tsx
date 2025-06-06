import './App.css'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
	return (
		<div className="bg-gray-500 flex flex-col justify-center h-screen w-256">
			<Sidebar />
			<Content />
			<Footer />
		</div>
	)
}

export default App
