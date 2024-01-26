import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HiringManagementPage from "./pages/HiringManagementPage";
import VisaStatusManagement from './pages/VisaStatusManagement';
import NavBar from "./pages/NavBar";



import NotFound from "./pages/ErrorPages/NotFound";
import NotAuthorized from "./pages/ErrorPages/NotAuthorized";
import SessionExpired from "./pages/ErrorPages/SessionExpired";
import ServerError from "./pages/ErrorPages/ServerError";

import Registration from "./pages/Registration";
import Login from "./pages/Login";

import TestRedux from "./pages/Test/TestRedux";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HiringManagementPage />} />
          <Route path="/hiring-management" element={<HiringManagementPage />} />
          <Route path="/visa-status-management" element={<VisaStatusManagement/>} />
        </Route>
        <Route path="/registration/:token" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error">
          <Route path="/error/server-error" element={<ServerError />} />
          <Route path="/error/not-authorized" element={<NotAuthorized />} />
          <Route path="/error/session-expired" element={<SessionExpired />} />
        </Route>
        <Route path="/test" element={<TestRedux />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
