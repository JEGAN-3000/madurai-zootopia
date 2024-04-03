
import { NavLink, Outlet } from "react-router-dom";


const AnimalSidebar = () => {

  return (
    <div className="flex flex-col md:flex-row justify-end ">
      <div className="hidden md:block h-screen w-1/6 bg-[#116530] text-white fixed justify-start z-10">
        <ul className="w-full flex flex-col gap-y-32 p-10 text-2x">
          <li className="hover:border-b-2  duration-100 text-3xl text-center" id="linkTags">
            <NavLink className='max-w-full' to="herbivores">HERBIVORES</NavLink>
          </li>
          <li className="hover:border-b-2  duration-100 text-3xl text-center" id="linkTags">
            <NavLink to="carnivores">CARNIVORES</NavLink>
          </li> 
          <li className="hover:border-b-2  duration-100 text-3xl text-center" id="linkTags">
            <NavLink to="omnivores">OMNIVORES</NavLink>
          </li>
          <li className="hover:border-b-2  duration-100 text-3xl text-center" id="linkTags">
            <NavLink to="birds">BIRDS</NavLink>
          </li>
          <li className="hover:border-b-2  duration-100 text-3xl text-center" id="linkTags">
            <NavLink to="reptiles">REPTILES</NavLink>
          </li>
        </ul>
      </div>
      <div className="block md:hidden sticky top-0 ">
      <ul className="flex justify-evenly text-1xl gap-4 bg-primary  text-white flex-wrap p-2 ">
          <li className=" p-2 rounded" id="linkTags" >
            <NavLink className='max-w-full' to="herbivores">HERBIVORES</NavLink>
          </li>
          <li className=" p-2 rounded" id="linkTags">
            <NavLink to="carnivores">CARNIVORES</NavLink>
          </li>
          <li className=" p-2 rounded" id="linkTags">
            <NavLink to="omnivores">OMNIVORES</NavLink>
          </li>
          <li className=" p-2 rounded" id="linkTags">
            <NavLink to="birds">BIRDS</NavLink>
          </li>
          <li className=" p-2 rounded" id="linkTags">
            <NavLink to="reptiles">REPTILES</NavLink>
          </li>
        </ul>
      </div>
      

      <div className="w-full z-0 ">
        <Outlet />
      </div>    
    </div>
  );
};

export default AnimalSidebar;
