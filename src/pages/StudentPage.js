import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentPage = () => {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // use the useParams hook in React Router to allow us to access dynamic segments in our dynamic route
  const params = useParams();
  // our dynamic segment was called studentId, so we can access it as follows:
  const studentId = params.studentId;

  // now simply use useEffect to fetch the student's data

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchStudentDetails = async () => {
      try {
        // send an HTTP GET request to the get students route we defined in our Express REST API
        const response = await fetch(
          `http://localhost:5000/Students/RetrieveAllStudents`,
          {
            signal: fetchSignal
          }
        );
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the students we fetched
        setStudent(data.student);

        // after we set the students' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchStudentDetails();

    return () => {
      fetchAbortController.abort();
    };
  }, [studentId]);

  if (isLoading) {
    return <h1>Please wait while loading student details...</h1>;
  }

  if (!student) {
    return <h1>Couldn't find student...</h1>;
  }

  return (
    <div className="flex justify-center items-center w-screen gap-8 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h1 className="font-bold text-4xl">{student.name}</h1>
        <img
          src={student.imgURL}
          alt={student.name}
          className="object-scale-down h-[300px] bg-white p-10 rounded-3xl"
        />
        <p className="text-lg">{student.description}</p>
        <h3 className="text-lg font-bold">{student.price} EGP</h3>
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h1 className="font-bold text-4xl">{student.module.modulename}</h1>
        <img
          src={student.supplierId.imgURL}
          alt={student.supplierId.name}
          className="object-scale-down h-[300px] bg-white p-10 rounded-3xl"
        />
        <h2 className="text-lg">{student.supplierId.email} EGP</h2>
        <h2 className="text-lg">{student.supplierId.address}</h2>
      </div> */}
    </div>
  );
};

export default StudentPage;
