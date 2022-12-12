import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import SubmitAbscenceForm from './pages/SubmitAbscenceForm'
import AddStudentForm from './components/students/AddStudentsForm';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import AttendancePage from './pages/AttendancePage';
import AddmodulePage from './pages/AddmodulePage';
// import ProdutPage from './pages/ProdutPage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Students/RetrieveAllStudents" element={<StudentsPage />} />
            <Route path="/Students" element={<AddStudentForm />} />
            <Route path="/SubmitAbscenceForm/:studentId/:module" element={<SubmitAbscenceForm />}/>
            <Route path="/AddModule" element={<AddmodulePage />} />
            <Route path="/Attendance" element={<AttendancePage/>}/>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
