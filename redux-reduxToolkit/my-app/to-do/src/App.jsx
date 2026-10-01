import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-slate-950 text-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center">learning redux and redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
