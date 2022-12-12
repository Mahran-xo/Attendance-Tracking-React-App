import { useContext } from 'react';
import AuthContext from '../../store/authContext';
import NavItem from './NavItem';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  return (
    <nav>
      <ul className="flex bg-sky-900 justify-center items-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/Students/RetrieveAllStudents">Students</NavItem>
        <NavItem to="/Attendance">Attendance</NavItem>
        <NavItem to="/AddModule">Add Module</NavItem>
        <NavItem to="/SubmitAbscenceForm/:studentId/:module" onclick>Submit Abscence Form</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
      </ul>
    </nav>
  );
};

export default Navbar;
