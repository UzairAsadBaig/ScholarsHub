import "./App.css";
import { Navbar } from "./components/Navbar";
import { SideNavbar } from "./components/SideNavbar";
import SignUpForm from "./components/Signup";
import LoginForm from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import {Outlet} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Employees from "./components/Employees/Employees";
import Settings from "./components/Settings";
import Landing from "./components/LandingPage/Landing";
import Forbidden from "./components/ErrorTemplates/ForbiddenPage";
import PageNotFound from "./components/ErrorTemplates/PageNotFound";
import TableComp from "./components/TableComp/TableComp";
import Messenger from './components/Messenger'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />

       
        <Route exact path="/signup" element={<SignUpForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route
          exact
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        <Route exact path="/forbidden" element={<Forbidden />} />

        <Route
          exact
          path="dashboard"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <SideNavbar />
                <div className="mt-20 pb-10 pt-4 ps-4 md:ml-10 2xl:ml-72">
                  <Outlet />
                </div>
              </>
            </ProtectedRoute>
          }
        >
          {/****************** ROUTES  *****************/}

          <Route
            exact
            path="table"
            element={
              <ProtectedRoute>
                <TableComp />
              </ProtectedRoute>
            }
          />
           <Route
            exact
            path="messenger"
            element={
              <ProtectedRoute>
                <Messenger/>
              </ProtectedRoute>
            }
          />
        
          <Route
            exact
            path="employees"
            element={
              <ProtectedRoute resource="4">
                <Employees />
              </ProtectedRoute>
            }
          />

      

          <Route
            exact
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* ---------------- Routes that does not exist -------------------------- */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
