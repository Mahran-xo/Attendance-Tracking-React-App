import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import SubmitAbscenceForm from './pages/SubmitAbscenceForm'
import AddStudentsPage from './pages/AddStudentsPage';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import AttendancePage from './pages/AttendancePage';
import AddModulePage from './pages/AddModulePage';
import AddNewStudentsPage from './pages/AddNewStudentPage';
import AddToModulePage from './pages/AddToModulePage';
import DeleteFromModulePage from './pages/DeleteFromModulePage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Students/:studentId" element={<StudentPage />} />
            <Route path="/Students" element={<StudentsPage/>} />
            <Route path="/AddStudentsToModule/:studentId" element={<AddToModulePage/>} />
            <Route path="/AddStudents" element={<AddNewStudentsPage/>} />
            <Route path="/SubmitAbscenceForm/:studentId" element={<SubmitAbscenceForm />}/>
            <Route path="/AddModule" element={<AddModulePage />} />
            <Route path="/Attendance" element={<AttendancePage/>}/>
            <Route path="/DeleteFromModule/:studentId" element={<DeleteFromModulePage/>}/>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
