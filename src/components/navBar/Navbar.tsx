import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div className="w-full bg-rose-500 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
            <Link to="" className="text 2xl font-bold ">Farmácia THICHI</Link>
            <div className="flex gap-4">
                <Link to="" className="hover:underline hover:scale-105 transition-all">Products</Link>
                <Link to="/categories" className="hover:underline hover:scale-105 transition-all">Categories</Link>
                <Link to="/createCategory" className="hover:underline hover:scale-105 transition-all">Create Category</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar