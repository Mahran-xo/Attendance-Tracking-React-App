import { useState, useEffect } from 'react';

import AddToModuleForm from '../components/students/AddToModuleForm';

const AddToModulePage = () => {
  const [Module, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchStudents = async () => {
      try {
        const response = await fetch('https://attendance-tracking.azurewebsites.net/Modules/RetrieveAllModule', {
          signal: fetchSignal,
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setModules(data.Module);
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
    return <p>Loading list of existing students...</p>;
  }

  return (
    <div>
      <AddToModuleForm module={Module} />
      
    </div>
  );
};

export default AddToModulePage;
