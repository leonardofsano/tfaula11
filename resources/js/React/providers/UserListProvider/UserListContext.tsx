import { createContext } from "react";
import { UserListContextValues } from "./userList.types";

/**
 * Contexto para gerenciar o estado global da listagem de usuários
 * Permite que componentes acessem e modifiquem dados de usuários e paginação
 */
export default createContext<UserListContextValues | null>(null);
