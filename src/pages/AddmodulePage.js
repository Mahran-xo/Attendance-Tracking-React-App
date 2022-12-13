import {useEffect } from 'react';

import AddmoduleForm from '../components/modules/AddModuleForm';

const AddmodulePage = () => {


  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchModules = async () => {
      try {
        const response = await fetch('https://attendancetracking.azurewebsites.net/Modules/RetrieveAllModule', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchModules();

    return () => {
      fetchAbortController.abort();
    };
  }, []);


  return (
    <div>
      <AddmoduleForm Modules={module} />
    </div>
  );
};

export default AddmodulePage;
