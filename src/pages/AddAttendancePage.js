import { useState, useEffect } from 'react';

import AddAttendancesForm from '../components/Attendance/AddAttendanceForm';

const AddAttendancesPage = () => {
  const [Attendances, setAttendances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchAttendances = async () => {
      try {
        const response = await fetch('https://attendancetracking.azurewebsites.net/Attendance', {
          signal: fetchSignal,
          method:"POST"
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setAttendances(data.Attendances);
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
      <AddAttendancesForm attendance={Attendances} />
    </div>
  );
};

export default AddAttendancesPage;
