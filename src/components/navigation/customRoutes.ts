import { Dashnoard } from "../../pages/Dashboard/Dashboard";
import { Login } from "../../pages/Login/LoginPage";

const customRoutes = [
  {
    path: "/",
    component: Login,
    isPrivated: false,
  },
  {
    path: "/dashboard",
    component: Dashnoard,
    isPrivated: false,
  },

];
  
  export default customRoutes;
  