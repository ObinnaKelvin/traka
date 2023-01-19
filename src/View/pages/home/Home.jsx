import Dashboard from "../dashboard/Dashboard";
import './home.css';
import NavBar from "../../components/navigation/NavBar";
const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default Home