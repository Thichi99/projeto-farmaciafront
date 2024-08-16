/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const search = async(url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

export const create = async (url: string, dados: object, setDados: Function) => {
    try {
      const resposta = await api.post(url, dados);
      setDados(resposta.data);
    } catch (error) {
      console.error('Erro ao criar recurso:', error);
      throw error; // Adicione um tratamento de erro se necessário
    }
  };
  

export const update = async(url: string, dados: object, setDados: Function) => {
  const resposta = await api.put(url, dados)
  setDados(resposta.data)
}

export const deletar = async(url: string) => {
  await api.delete(url)
}