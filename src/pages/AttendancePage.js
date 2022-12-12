import { useState, useEffect } from 'react';

import AddAttendanceForm from '../components/Attendance/AddAttendanceForm';

const AttendancePage = () => {
  const [attendances, setAttendances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchAttendances = async () => {
      try {
        const response = await fetch('https://attendancetracking.azurewebsites.net//Attendance/GenerateAttendance', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setAttendances(data.attendances);
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
      <AddAttendanceForm attendances={attendances} />
    </div>
  );
};

export default AttendancePage;