import { useState, useEffect } from 'react';

import AddModuleForm from '../components/students/AddModuleForm';

const AddModulePage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchStudents = async () => {
            try {
                const response = await fetch('https://attendance-tracking.azurewebsites.net/Students/RetrieveAllStudents', {
                    signal: fetchSignal,
                });
                const data = await response.json();

                if (!response.ok) {
                    throw Error(data.error);
                }

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
        return <p> Loading list of existing students... </p>;
    }

    return (
        <div>
        <AddModuleForm/>
        
        </div>
  );
};

export default AddModulePage;