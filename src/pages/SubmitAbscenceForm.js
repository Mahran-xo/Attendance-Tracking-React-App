import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextInput from '../UI/form/TextInput';
import SubmitAbscenceForm from '../components/students/SubmitAbscenceForm';

const SubmitAbscence = () => {
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
      return <p>Loading ...</p>;
    }
  
    return (
      <div>
        <SubmitAbscenceForm module={Module} />
      </div>
    );
  };
  
  export default SubmitAbscence;