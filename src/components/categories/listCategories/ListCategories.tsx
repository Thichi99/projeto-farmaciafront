import { useState } from "react"
import Category from "../../../models/Category"
import { DNA } from "react-loader-spinner";
import CardCategories from "../cardCategories/CardCategories";

function ListCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

  return (
    <>
        {categories.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
            />
        )}
        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((Category) => (
                        <>
                            <CardCategories key={categories.id} category={Category} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default ListCategories