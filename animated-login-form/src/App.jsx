import FormInput from "./components/FormInput";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <FormInput label="Email" type="email" />
        <FormInput label="Password" type="password" />
        <button className="btn">Login</button>
      </form>
      <p className="text">
        Don't have an account? <a href="#">Register</a>
      </p>
    </div>
  );
};

export default App;
