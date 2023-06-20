import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <Avatar
        imageUrl={
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
      />
      <h1>Hi, I'm a React App</h1>
      <Profile
        imageUrl={
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
        name={"Stella"}
        isNew={true}
      />
      <Profile
        imageUrl={
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
        name={"Ha"}
      />
      <Profile
        imageUrl={
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
        name={"Sangchu"}
      />
    </div>
  );
}

export default App;
