/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import Category from "../../../models/Category"
import { DNA } from "react-loader-spinner";
import CardCategories from "../cardCategories/CardCategories";
import { search } from "../../../services/Services";

function ListCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    const [loading, setLoading] = useState(true)


    async function searchCategories() {
        try {
            await search('/categories', setCategories);
        } catch (error: any) {
            console.error("Erro ao buscar temas:", error)
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        searchCategories();
    }, [])

  return (
    <>
        {loading ? (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
            />
        ) : (
            <div className="flex justify-center w-full my-4">
              <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories.length > 0 ? (
                    categories.map((Category) => (
                      <CardCategories key={Category.id} category={Category} />
                    ))
                  ) : (
                    <p>Nenhum tema disponível.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

export default ListCategories