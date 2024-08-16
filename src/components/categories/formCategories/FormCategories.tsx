/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';
import Category from '../../../models/Category';
import { create, search, update } from '../../../services/Services';

function FormCategories() {
  const [category, setCategory] = useState<Category>({} as Category);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await search(`/categories/${id}`, setCategory);
    } catch (error: any) {
      console.error('Erro ao buscar categoria:', error);
      toastAlerta('Erro ao buscar categoria', 'erro');
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });

    console.log(JSON.stringify(category));
  }

  async function generateNewCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await create(`/categories`, category, setCategory);
      toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
      retornar(); // Redireciona após sucesso
    } catch (error: any) {
      console.error('Erro ao cadastrar categoria:', error);
      toastAlerta('Erro ao cadastrar a Categoria', 'erro');
    }
  }

  async function updateCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  
    try {
      await update(`/categories/${id}`, category, setCategory);
      toastAlerta('Categoria atualizada com sucesso', 'sucesso');
      retornar(); // Redireciona após sucesso
    } catch (error: any) {
      console.error('Erro ao atualizar categoria:', error);
      toastAlerta('Erro ao atualizar a Categoria', 'erro');
    }
  }

  function retornar() {
    navigate("/categories");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4"
        onSubmit={id === undefined ? generateNewCategory : updateCategory}
      >
        <div className='flex flex-col gap-2'>
            <label htmlFor="name">Nome da Categoria:</label>
            <input 
            type="text"
            placeholder='Nome' 
            name='name'
            className='border-2 border-slate-700 rounded p-2'
            value={category.name || ""}
            onChange={atualizarEstado}
            />
            
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='description'
            className="border-2 border-slate-700 rounded p-2"
            value={category.description || ''}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-rose-500 hover:bg-rose-700 hover:scale-105 transition-all w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategories;
