import Content from './Content'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
   return (
      <div className="bg-gray-500 flex flex-col justify-center h-screen w-256">
         <Sidebar />
         <Content />
         <Link to="/blog" className="text-blue-500 hover:underline mt-4">Blogs</Link>
         <Footer />
      </div>
   )
}
