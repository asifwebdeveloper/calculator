
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from "./pages/homeP"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
   
  );
}

export default App;
