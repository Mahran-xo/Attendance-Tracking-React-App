import { useState, useEffect } from 'react';

import AddAttendanceForm from '../components/students/AddAttendanceForm';

const AttendancePage = () => {
  const [Module, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchAttendances = async () => {
      try {
        const response = await fetch('https://attendance-tracking.azurewebsites.net/Modules/RetrieveAllModule', {
          signal: fetchSignal
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

    fetchAttendances();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Loading list of existing attendances...</p>;
  }

  return (
    <div>
      <AddAttendanceForm module={Module} />
    </div>
  );
};

export default AttendancePage;