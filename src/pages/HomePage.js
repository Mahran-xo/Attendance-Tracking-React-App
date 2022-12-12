import { useEffect, useState } from 'react';
import StudentsList from '../components/students/StudentsList';


const HomePage = () => {
  const [Students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

//   const viewBtnHandler = () => {
//     // navigate(`/viewmine/${ID}`);
//     // navigate(`/viewPurchase/${ID}`);

// };
  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://attendancetracking.azurewebsites.net//Students/RetrieveAllStudents', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setStudents(data.Students);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, [Students]);

  if (isLoading) {
    return <p> Please wait while we are loading data.. .</p>;
  }
  return (
    <div>
    <h1>List of Studets</h1> <StudentsList Students={Students} />
      
    </div>
  );
};

export default HomePage;