import { useEffect, useState } from "react";
import { Title } from "./components/Title/title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

function App() {


  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Terminar proyecto pendiente',
      complete: false,
    },
    {
      id: 2,
      title: 'Lavar el carro',
      complete: false,
    },
    {
      id: 3,
      title: 'Visitar a la familia',
      complete: false,
    },
    {
      id: 4,
      title: 'Hacer ejercicio en casa',
      complete: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredTodos, setFilterdTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      complete: false
    }

    const TodoList = [...todos]
    TodoList.push(newTodo);
    setTodos(TodoList);
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedList);
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.complete)
    setTodos(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter("completed")
  }

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilterdTodos(todos)
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.complete === false)
      setFilterdTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.complete === true)
      setFilterdTodos(completedTodos)
    }
  }, [activeFilter, todos])



  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className=" container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          activeFilter={activeFilter}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />

      </div>

    </div>
  );
}

export default App;