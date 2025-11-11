/**
 * UserListProvider - Provider para gerenciamento de listagem de usuários
 * 
 * Este módulo exporta tudo necessário para usar o contexto de listagem de usuários:
 * - UserListProvider: Componente Provider
 * - useUserListContext: Hook para acessar o contexto
 * - Types: Todas as tipagens necessárias
 */

export { default as UserListProvider } from "./UserListProvider";
export { useUserListContext } from "./userListHooks";
export { default as UserListContext } from "./UserListContext";
export { initialUserListState, userListReducer } from "./userListReducer";

export type {
    UserListState,
    UserListActions,
    UserListProviderProps,
    UserListContextValues
} from "./userList.types";
