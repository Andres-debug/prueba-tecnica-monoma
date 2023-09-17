import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Login } from "../../pages/Login/LoginPage";

const customRoutes = [
  {
    path: "/",
    component: Login,
    isPrivated: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivated: false,
  },

];
  
  export default customRoutes;
  