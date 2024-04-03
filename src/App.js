
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import RootLayout from './Layouts/RootLayout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import Herbivores from './Components/Animal/Herbivores';
import Carnivores from './Components/Animal/Carvnivores';
import Omnivores from './Components/Animal/Omnivores';
import Reptiles from './Components/Animal/Reptiles';
import Birds from './Components/Animal/Birds';
import AnimalSidebar from './Components/Animal/AnimalSidebar';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='animals' element={<AnimalSidebar/>}>
        <Route path='herbivores' element={<Herbivores/>}/>
        <Route path='carnivores' element={<Carnivores/>}/>
        <Route path='omnivores' element={<Omnivores/>}/>
        <Route path='reptiles' element={<Reptiles/>}/>
        <Route path='birds' element={<Birds/>}/>
      </Route>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)
function App() {
  return (
    <>
  
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
