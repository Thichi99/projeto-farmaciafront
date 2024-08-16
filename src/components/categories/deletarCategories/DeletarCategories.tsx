/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toastAlerta } from '../../../utils/toastAlerta';
import Category from '../../../models/Category';
import { deletar, search } from '../../../services/Services';

function DeletarCategories() {
    const [category, setCategory] = useState<Category>({} as Category);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function searchById(id: string) {
        try {
            await search(`/categories/${id}`, setCategory);
        } catch (error: any) {
            console.error('Erro ao buscar a categoria:', error);
            toastAlerta('Erro ao buscar a categoria', 'erro');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            searchById(id);
        }
    }, [id]);

    function retornar() {
        navigate("/categories");
    }

    async function deleteCategory() {
        if (!id) {
            toastAlerta('ID da categoria não encontrado', 'erro');
            return;
        }

        try {
            console.log('Deletando categoria com ID:', id);
            await deletar(`/categories/${id}`); 
            toastAlerta('Categoria apagada com sucesso', 'sucesso');
            retornar();
        } catch (error) {
            console.error('Erro ao apagar a Categoria:', error);
            toastAlerta('Erro ao apagar a Categoria', 'erro');
        }
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-rose-500 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>
                    {category.description}
                </p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 hover:scale-105 transition-all'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-rose-500 hover:bg-rose-700 flex items-center justify-center hover:scale-105 transition-all'
                        onClick={deleteCategory}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategories;
