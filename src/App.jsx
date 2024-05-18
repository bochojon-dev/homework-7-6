import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import CreateProducts from "./pages/admin/create-product/CreateProducts";
import ManageProducts from "./pages/admin/managa-product/ManageProducts";
import CreateUsers from "./pages/admin/create-users/CreateUsers";
import ManageUsers from "./pages/admin/manage-users/ManageUsers";
import NotFound from "./pages/not-found/NotFound";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Users from "./components/users/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProducts />} />
            <Route path="manage-product" element={<ManageProducts />} />
            <Route path="create-user" element={<CreateUsers />} />
            <Route path="manage-user" element={<ManageUsers />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
