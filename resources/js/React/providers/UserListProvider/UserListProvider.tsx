import React, { useCallback, useMemo, useReducer } from "react";
import { UserListContextValues, UserListProviderProps } from "./userList.types";
import { initialUserListState, userListReducer } from "./userListReducer";
import UserListContext from "./UserListContext";

/**
 * Provider para gerenciar o estado global da listagem de usuários
 * 
 * Este componente fornece um contexto centralizado para controlar:
 * - Lista de usuários retornados da API
 * - Paginação (página atual e informações)
 * - Estado de carregamento
 * 
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <UserListProvider>
 *       <UserListPage />
 *       <UserPagination />
 *     </UserListProvider>
 *   );
 * }
 * ```
 */
export default function UserListProvider({ children }: UserListProviderProps) {
    const [state, dispatch] = useReducer(userListReducer, initialUserListState);

    // Helpers para facilitar o uso do dispatch
    const setUserListData = useCallback((data: Parameters<UserListContextValues['setUserListData']>[0]) => {
        dispatch({ type: "setUserListData", payload: data });
    }, []);

    const setCurrentPage = useCallback((page: number) => {
        dispatch({ type: "setCurrentPage", payload: page });
    }, []);

    const setLoading = useCallback((loading: boolean) => {
        dispatch({ type: "setLoading", payload: loading });
    }, []);

    const resetUserList = useCallback(() => {
        dispatch({ type: "resetUserList" });
    }, []);

    // Memoiza a API do contexto para evitar re-renders desnecessários
    const contextValue = useMemo<UserListContextValues>(() => ({
        state,
        dispatch,
        setUserListData,
        setCurrentPage,
        setLoading,
        resetUserList
    }), [state, setUserListData, setCurrentPage, setLoading, resetUserList]);

    return (
        <UserListContext.Provider value={contextValue}>
            {children}
        </UserListContext.Provider>
    );
}
