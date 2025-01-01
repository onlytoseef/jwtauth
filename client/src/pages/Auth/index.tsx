import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function Index() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
