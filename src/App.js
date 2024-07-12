import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Routing from './Components/Routing';
import Loader from './Components/Common/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Errortoast, Successtoast } from './plugin/Toast/Toast';
import { useEffect } from 'react';

function App() {
   useEffect(() => {
    Successtoast("success");
    Errortoast("error");
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <Loader /> */}
      <Routing />
    </>
  );
}

export default App;
