import { useState } from "react";
import StudentsList from "../components/StudentsInfo/StudentsList";

const StudentsPage = () => {
    const [student, setStudents] = useState([]);

    const dummy = [
        {
            _id: 1,
            name: "ali",
            id: 193085,
            email: "ali193085@bue.edu"
        },
        {
            _id: 2,
            name: "ali",
            id: 193085,
            email: "ali193085@bue.edu"
        }
    ];

    const onButtonClickHandler = () => {
        setStudents(dummy);
    };


    return (
      <div className="flex flex-col items-center justify-center">
      <StudentsList student={student}/>
        <button
        className="bg-blue-900 text-white py-3 px-10 my-10 font-bold rounded-xl"
        onClick={onButtonClickHandler}
        >
            set products
        </button>
      </div >
    );
  };
export default StudentsPage;