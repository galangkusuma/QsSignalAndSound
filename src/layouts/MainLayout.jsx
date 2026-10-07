import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 

export default function MainLayout() { 
  return ( 
    <div className="flex flex-col min-h-screen"> 
      <Navbar /> 
      <main className="flex-1 bg-[#f3f0e9] px-4 py-8 sm:px-6 lg:px-8"> 
        <Outlet /> 
      </main> 
      <footer className="bg-slate-950 px-4 py-5 text-center text-sm text-slate-400"> 
        <p>© 2026 Q's Signal & Sound Audio Supply</p> 
      </footer> 
    </div> 
  ); 
} 
