import { NavLink } from "react-router-dom";
import './Navegacion.css';

const Navegacion = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">  
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <a className="navbar-brand" href="#">
            
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >Name

            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                        <NavLink to="/">               
                            Home               
                        </NavLink>
                    </li>
                    
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <NavLink to="/portfolio">               
                            Portfolio             
                        </NavLink>
                    </li>

                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <NavLink to="/formulario">               
                            Formulario              
                        </NavLink>
                    </li>

                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <NavLink to="/clientes">               
                            Clientes              
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/faq">               
                            Faq              
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>    
        </div>    
        </div>
        </nav>
    );
};

export default Navegacion;



