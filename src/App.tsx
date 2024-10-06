import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routers } from "./router";
import { Error } from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        {routers.map(({ path, Element, ...props }) => (
          <Route key={path} path={path} element={<Element {...props} />} />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
