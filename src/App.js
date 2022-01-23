import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;