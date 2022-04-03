import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    
        <button><Link to="/Sign">Sign</Link></button>
        <button><Link to="/Register">Register</Link></button>
        
         
      
    

    <Outlet />
  </>
  );
};

export default Layout;