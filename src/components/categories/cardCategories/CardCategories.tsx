import { Link } from "react-router-dom"
import Category from "../../../models/Category"

interface CardCategoriesProps {
    category: Category
}

function CardCategories({category}: CardCategoriesProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-rose-500 text-white font-bold text-2xl">Category</header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{category.description}</p>
        <div className="flex">
            <Link to={`/editCategories/${category.id}`} className="w-full text-slate-100 bg-rose-500 hover:bg-rose-700 hover:scale-105 transition-all flex items-center justify-center py-2">
                <button>Edit</button>
            </Link>
            <Link to={`/deleteCategories/${category.id}`} className="text-red-600 hover:text-red-300 bg-red-300 hover:bg-red-600 hover:scale-105 transition-all flex w-full items-center justify-center">
                <button>Delete</button>
            </Link>
        </div>    
    </div>
  )
}

export default CardCategories