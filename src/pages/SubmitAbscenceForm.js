import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { data } from 'autoprefixer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
//import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../UI/form/TextInput';
// import SubmitAbscenceForm from "../components/students/SubmitAbscenceForm";

const SubmitAbscenceForm = () => {

    const [Students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const studentId = "638d0c4fd5fde209c75837fa";
    const module = "638d1d4fc01fc9b4497d2c7c";
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm();

    const submitHandler = async (formData) => {
        try {

            const response = await fetch(`https://attendancetracking.azurewebsites.net//Absence/${studentId}/${module}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });


            const data = await response.json();

            if (!response.ok) {
                throw Error(data.error);
            }

            setStudents(data.abs);
            setIsLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    };


    // useEffect(() => {
    //     const fetchAbortController = new AbortController();
    //     const fetchSignal = fetchAbortController.signal;

    //     const fetchStudents = async () => {
    //         try {

    //     };

    //     fetchStudents();

    //     return () => {
    //         fetchAbortController.abort();
    //     };
    // }, []);

    // if (isLoading) {
    //     return <p>Loading Form...</p>;
    // }

    return (
        <div>
            <form
                className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
                onSubmit={handleSubmit(submitHandler)}
            >
                <TextInput
                    label="Reason"
                    type="text"
                    name="reason"
                    register={register}
                    validation={{ required: true }}
                />
                <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                    Add Abs.
                </button>
            </form>
        </div>
    );
};

export default SubmitAbscenceForm;