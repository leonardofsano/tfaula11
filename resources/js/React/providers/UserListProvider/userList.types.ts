import { ListApi, UserModel } from "@app/js/app.types";
import React from "react";

/**
 * Representa o estado dos dados de usuários retornados pela API
 */
type UserListDataValue = ListApi<UserModel> | "error";

/**
 * Estado global do UserListProvider
 */
export type UserListState = {
    /** Lista de usuários e informações de paginação */
    data?: UserListDataValue;
    /** Página atual sendo exibida */
    currentPage: number;
    /** Indica se está carregando dados */
    loading: boolean;
}

/**
 * Ação para atualizar os dados de usuários
 */
type SetUserListDataAction = {
    type: "setUserListData";
    payload: UserListDataValue;
}

/**
 * Ação para mudar a página atual
 */
type SetCurrentPageAction = {
    type: "setCurrentPage";
    payload: number;
}

/**
 * Ação para definir o estado de loading
 */
type SetLoadingAction = {
    type: "setLoading";
    payload: boolean;
}

/**
 * Ação para resetar o estado ao inicial
 */
type ResetUserListAction = {
    type: "resetUserList";
}

/**
 * União de todas as ações possíveis do reducer
 */
export type UserListActions = 
    | SetUserListDataAction 
    | SetCurrentPageAction 
    | SetLoadingAction
    | ResetUserListAction;

/**
 * Props do componente UserListProvider
 */
export type UserListProviderProps = {
    children: React.ReactNode;
}

/**
 * Valores expostos pelo contexto
 */
export type UserListContextValues = {
    /** Estado atual */
    state: UserListState;
    /** Função para disparar ações no reducer */
    dispatch: (action: UserListActions) => void;
    /** Helper: atualiza os dados de usuários */
    setUserListData: (data: UserListDataValue) => void;
    /** Helper: muda a página atual */
    setCurrentPage: (page: number) => void;
    /** Helper: define o estado de loading */
    setLoading: (loading: boolean) => void;
    /** Helper: reseta o estado */
    resetUserList: () => void;
}
