import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AdminLogin } from "./components/AdminLogin";
import { AdminSignUp } from "./components/AdminSignUp";

import { GovtOfficialLogin } from "./components/GovtOfficialLogin";
import { GovtOfficialSignUp } from "./components/GovtOfficialSignUp";

 
import { Skills } from "./components/Skills";
import { Places } from "./components/Places";
import { AddPlaces } from "./components/AddPlaces";
import { SuperAdminApproval } from "./components/SupeAdminApproval";
 
// import { AddCourse } from "./components/AddCourse";
// import { CoursePage } from "./components/CoursePage";
 
import { JobUser } from "./components/JobUser";
import { JobAdmin } from "./components/JobAdmin";
import { AddJobAdmin } from "./components/AddJobAdmin";

// import { AddCourse } from "./components/AddCourse";
import { CoursePage } from "./components/CoursePage";
 

import { PlacesAdmin } from "./components/PlacesAdmin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/admin-login"
            element={<AdminLogin></AdminLogin>}></Route>

          <Route
            path="/admin-sign-up"
            element={<AdminSignUp></AdminSignUp>}></Route>

 
          
 
          <Route path="/jobs" element={<JobUser></JobUser>}></Route>
          <Route path="/jobs-admin" element={<JobAdmin></JobAdmin>}></Route>
          <Route path="/add-jobs-admin" element={<AddJobAdmin></AddJobAdmin>}></Route>

          {/* <Route path="/addcourse" element={<AddCourse></AddCourse>}></Route> */}
          <Route path="/coursepage" element={<CoursePage></CoursePage>}></Route>
 

          <Route
            path="/govtofficial-sign-up"
            element={<GovtOfficialSignUp></GovtOfficialSignUp>}></Route>
          <Route path="/sign-out" element={<Login></Login>}></Route>
          <Route path="/places" element={<Places></Places>}></Route>
          <Route path="/addplaces" element={<AddPlaces></AddPlaces>}></Route>
          <Route
            path="/places-admin"
            element={<PlacesAdmin></PlacesAdmin>}></Route>

          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route
            path="/super-admin"
            element={<SuperAdminApproval></SuperAdminApproval>}></Route>

          {/* <Route path="/jobs" element={<JobUser></JobUser>}></Route>
          <Route path="/jobs-admin" element={<JobAdmin></JobAdmin>}></Route> */}
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
