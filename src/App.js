import "./App.css";
import { Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList";
import AddUsers from "./components/AddUsers";
import UserDetails from './components/UserDetails'
import EditUser from './components/EditUser'

export const URL = process.env.REACT_APP_SERVER_URL
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/add-users" element={<AddUsers />} />
        <Route path="/user-details" element={<UserDetails/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>

      </Routes>
    </div>
  );
};

export default App;
