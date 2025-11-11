import { UserListActions, UserListState } from "./userList.types";

/**
 * Estado inicial do reducer
 */
export const initialUserListState: UserListState = {
    data: undefined,
    currentPage: 1,
    loading: false
};

/**
 * Reducer para gerenciar o estado da listagem de usuários
 * Controla os dados, paginação e estado de carregamento
 */
export function userListReducer(
    state: UserListState,
    action: UserListActions
): UserListState {
    switch (action.type) {
        case "setUserListData":
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case "setCurrentPage":
            return {
                ...state,
                currentPage: action.payload
            };

        case "setLoading":
            return {
                ...state,
                loading: action.payload
            };

        case "resetUserList":
            return initialUserListState;

        default:
            return state;
    }
}
