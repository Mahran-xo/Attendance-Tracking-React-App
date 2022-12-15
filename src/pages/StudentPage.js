import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom'

const StudentPage = () => {


  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/SubmitAbscenceForm/${studentId}`);
  };

  const btnOnClick = () => {
    navigate(`/AddStudentsToModule/${studentId}`);
  };

  const btnOnClick2 = () => {
    navigate(`/DeleteFromModule/${studentId}`);
  };

  const [Student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const studentId = params.studentId;

  // now simply use useEffect to fetch the student's data

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchStudentDetails = async () => {
      try {
        // send an HTTP GET request to the get students route we defined in our Express REST API
        const response = await fetch(
          `https://attendance-tracking.azurewebsites.net/Students/${studentId}`,
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
        setStudent(data.Student);

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

  if (!Student) {
    return <h1>Couldn't find student...</h1>;
  }

  return (
    <div className="flex justify-center items-center w-screen gap-8 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] aspect-square">
        <h4 className="font-bold text-4xl">{Student.name} {Student.id}</h4>
        <h4 className="font-bold text-4xl"><h5>{Student.module.map((p) =>(
          <div>
         <li>{ p.moduleName }</li> 
         <li>{p.moduleCode}</li>
          </div>
        ))}</h5></h4>
             <button type="submit" onClick ={btnOnClickHandler}className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
       SubmitAbscenceForm
      </button>
      <button type="submit" onClick ={btnOnClick}className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
       Add To Modules
      </button>
      <button type="submit" onClick ={btnOnClick2}className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
       Remove From Modules
      </button>
        <div/>
      </div>
    </div>
    
  );
};

export default StudentPage;



