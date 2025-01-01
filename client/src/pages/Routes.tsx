import { Navigate, Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";

import ProtectedRoute from "./Frontend/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Index() {
  const isAuth = useSelector((state: RootState) => state.auth.Autheticated);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Frontend />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth/*"
        element={!isAuth ? <Auth /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
