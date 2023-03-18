import "./App.css";
import { Navbar } from "./components/Navbar";
import { SideNavbar } from "./components/SideNavbar";
import LoginForm from "./components/Login";
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
import UserSignup from "./components/Signup/UserSignup";
import OrgSignup from "./components/Signup/OrgSignup";
import {Jobs} from "./components/Jobs/Jobs";
import {AddJob} from "./components/Jobs/AddJob";
import { UpdateJob } from "./components/Jobs/UpdateJob";
import { ViewJob } from "./components/Jobs/ViewJob";
import { Applicants } from "./components/Applicants/Applicants";
import { ViewApplicant } from "./components/Applicants/ViewApplicant";
import { UserViewJob } from "./components/Jobs/UserViewJob";
import { ViewUserJobs } from "./components/Jobs/ViewUserJobs";
import { WishlistJobs } from "./components/Jobs/WishlistJobs";
import Insights from './components/Insights'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signup/user" element={<UserSignup />} />
        <Route exact path="/signup/org" element={<OrgSignup />} />
        <Route exact path="/login" element={<LoginForm />} />
      
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
            path="insights"
            element={
              // <ProtectedRoute>
                <Insights/>
              // </ProtectedRoute>
            }
          />  
          <Route
            exact
            path="jobs"
            element={
              // <ProtectedRoute>
                <Jobs/>
              // </ProtectedRoute>
            }
          />  
           <Route
            exact
            path="jobs/add"
            element={
              // <ProtectedRoute>
                <AddJob/>
              // </ProtectedRoute>
            }
          />
           <Route
            exact
            path="jobs/view/:jobId"
            element={
              // <ProtectedRoute>
                <ViewJob/>
              // </ProtectedRoute>
            }
          />
          <Route
            exact
            path="jobs/edit/:jobId"
            element={
              // <ProtectedRoute>
                <UpdateJob/>
              // </ProtectedRoute>
            }
          />
           <Route
            exact
            path="applicants"
            element={
              // <ProtectedRoute>
                <Applicants/>
              // </ProtectedRoute>
            }
          />
          <Route
            exact
            path="applicants/view/:appId"
            element={
              // <ProtectedRoute>
                <ViewApplicant/>
              // </ProtectedRoute>
            }
          />
          <Route
            exact
            path="user/jobs/view/:jobId"
            element={
              // <ProtectedRoute>
                <UserViewJob/>
              // </ProtectedRoute>
            }
          />
           <Route
            exact
            path="user/jobs"
            element={
              // <ProtectedRoute>
                <ViewUserJobs/>
              // </ProtectedRoute>
            }
          /> 
          <Route
            exact
            path="user/jobs/wishlisted"
            element={
              // <ProtectedRoute>
                <WishlistJobs/>
              // </ProtectedRoute>
            }
          />
          <Route
            exact
            path="table"
            element={
              // <ProtectedRoute>
                <TableComp />
              // </ProtectedRoute>
            }
          />
           <Route
            exact
            path="messenger"
            element={
              // <ProtectedRoute>
                <Messenger/>
              // </ProtectedRoute>
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
              // <ProtectedRoute>
                <Settings />
              // </ProtectedRoute>
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
