import { Todo } from "../Todo/Todo"
import { TodoFilters } from "../TodoFilters"

const TodoList = ({ 
    todos,
    handleSetComplete,
    handleClearComplete,
    handleDelete,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos
})=> {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => { 
                return (
                    <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleDelete={handleDelete}
                    handleSetComplete={handleSetComplete} 
                    
                    />
                )
            })}
            <TodoFilters 
                activeFilter={activeFilter}
                total={todos.lenght}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete} 
            /> 
        </div>
    )

}

export { TodoList }