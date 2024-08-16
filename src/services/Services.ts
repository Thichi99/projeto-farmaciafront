/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const search = async(url: string, setDados: Function, header: object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const create = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const update = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: object) => {
  await api.delete(url, header)
}