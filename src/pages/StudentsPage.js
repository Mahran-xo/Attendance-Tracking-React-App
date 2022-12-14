import { useEffect, useState } from 'react';
import StudentsList from '../components/students/StudentsList';

const StudentsPage = () => {
  // let's define a state for products
  const [Students, setStudents] = useState([]);

  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchStudents = async () => {
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch('https://attendance-tracking.azurewebsites.net/Students/RetrieveAllStudents', {
          signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the products we fetched
        setStudents(data.Students);
        console.log(data)

        // after we set the products' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchStudents();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <StudentsList Students={Students} />
    </div>
  );
};

export default StudentsPage;
