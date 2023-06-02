import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import postStore from "./context/posts/store";
import PostsList from "./components/PostList";

import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      {/* 1 - Contador com Redux */}
      <h2>1 - Contador com Redux</h2>
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* 2 - Todo List com Context API */}
      <h2>2 - Todo List com Context API</h2>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
      {/* 3 - Paginação com Redux */}
      <h2>3 - Paginação com Redux</h2>
      <Provider store={postStore}>
        <PostsList />
      </Provider>
      {/* 4 - Formulário com React Final Form */}
      <h2>4 - Formulário com React Final Form</h2>
      <MyForm />
    </>
  );
}

export default App;
