import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Route,Routes } from "react-router-dom";
import { isAuthUser } from "./redux/slice/auth";
import CreateVacancy from "./pages/CreateVacancy/CreateVacancy";
import MyProfile from "./pages/MyProfile/MyProfile";
import Vacancy from "./pages/Vacancy/Vacancy";
import Candidates from "./pages/Candidates/Candidates";
import Statistic from "./pages/Statistic/Statistic";


const App = () => {
  const isAuth = useSelector(isAuthUser);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createVacancy" element={<CreateVacancy />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="vacancy/:id" element={<Vacancy />} />
      <Route path="vacancy/:id/candidates" element={<Candidates/>}/>
      <Route path="vacancy/statistic" element={<Statistic/>} />
    </Routes>
    </>
  );
};

export default App;
