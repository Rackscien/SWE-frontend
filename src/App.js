import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import Adjuster from './components/pages/Adjuster';
import Manager from './components/pages/Manager';
import Head from './components/pages/Head';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AddMachine from './components/pages/AddMachine';
import ShowMachine from './components/pages/show/ShowMachine';
import ShowAdjuster from './components/pages/show/ShowAdjuster';
import ShowStatistics from './components/pages/show/ShowStatistics';
import CardAdjuster from './components/pages/Cards/CardAdjuster';
import AddAdjuster from './components/pages/AddAdjuster';
import ShowAdjuster1 from './components/pages/show/ShowAdjuster1';
import ShowMachine1 from './components/pages/show/ShowMachine1';
import ShowAssignedMachine from './components/pages/show/ShowAssignedMachine';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      {/*head routes */}
      <Route path="head" element={<Head />} />
      <Route path='showMachine' element={<ShowMachine />} />
      <Route path='showAdjuster' element={<ShowAdjuster />} />
      {/*manager routes */}
      <Route path="manager" element={<Manager />} />
      <Route path='showMachine1' element={<ShowMachine1 />} />
      <Route path='showAdjuster1' element={<ShowAdjuster1 />} />

      {/*adjuster routes */}
      <Route path="adjuster" element={<Adjuster />} />
      <Route path='assignedmachine' element={<ShowAssignedMachine/>}/>

      {/*other routes */}
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login />} />
      <Route path='addMachine' element={<AddMachine />} />
      <Route path='addAdjuster' element={<AddAdjuster />} />
      <Route path='showStatistics' element={ <ShowStatistics/>} />
      <Route path='cardAdjuster' element={ <CardAdjuster/>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
