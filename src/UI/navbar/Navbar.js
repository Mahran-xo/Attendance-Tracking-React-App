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
        <NavItem to="/Students">Add Student</NavItem>
        <NavItem to="/SubmitAbscenceForm" onclick>Submit Abscence Form</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
      </ul>
    </nav>
  );
};

export default Navbar;
