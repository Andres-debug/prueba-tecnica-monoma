import customRoutes from "../components/navigation/customRoutes";
import { Route } from "react-router-dom";

export const publicRoutes = customRoutes
.filter(r => !r.isPrivated)
.map(r => (
  <Route key={r.path} path={r.path || ""} element={
    <><r.component /></>
} />
));