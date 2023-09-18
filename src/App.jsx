import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import Feed from "./components/Feed/Feed";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";

function App() {
  const { user } = useSelector((store) => store.user);
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <div className="app">
      {isOpen && <Modal />}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
