import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./component/login";
import Register from "./component/Register";
import Profile from "./component/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;