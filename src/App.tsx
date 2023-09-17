import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { publicRoutes } from './router/publicRoutes';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes}
        </Routes>
      </Router>
    </>
  )
}

export default App
