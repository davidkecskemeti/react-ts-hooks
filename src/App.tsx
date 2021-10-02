import "./App.css";
import CustomHookComponent from "./CustomHookComponent";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import UseStateConponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>CustomHookComponent</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateConponent />
    </div>
  );
}

export default App;
