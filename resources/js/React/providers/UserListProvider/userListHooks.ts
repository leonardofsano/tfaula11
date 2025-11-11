import { useContext } from "react";
import UserListContext from "./UserListContext";

/**
 * Hook para acessar o contexto da listagem de usuários
 * 
 * @throws {Error} Lança erro se usado fora do UserListProvider
 * 
 * @returns {UserListContextValues} Estado e funções para gerenciar a lista de usuários
 * 
 * @example
 * ```tsx
 * function UserList() {
 *   const { state, setUserListData, setCurrentPage } = useUserListContext();
 * 
 *   useEffect(() => {
 *     fetchUsers(state.currentPage).then(data => {
 *       setUserListData(data);
 *     });
 *   }, [state.currentPage]);
 * 
 *   return (
 *     <div>
 *       {state.loading && <p>Carregando...</p>}
 *       {state.data !== "error" && state.data?.rows.map(user => (
 *         <UserCard key={user.id} user={user} />
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useUserListContext() {
    const context = useContext(UserListContext);
    
    if (!context) {
        throw new Error("useUserListContext deve ser usado dentro de <UserListProvider>");
    }
    
    return context;
}
