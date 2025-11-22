import UsersFetch from "./UsersFetch";
import PostsFetchAsync from "./PostsFetchAsync";
import TodosFetchAxios from "./TodosFetchAxios";

function App() {
  return (
    <div>
      <UsersFetch />
      <PostsFetchAsync />
      <TodosFetchAxios />
    </div>
  );
}

export default App;
