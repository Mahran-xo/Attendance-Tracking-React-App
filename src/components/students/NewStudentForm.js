import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const NewStudentForm = () => {


    const { register, handleSubmit, formState } = useForm();


    const submitHandler = async (formData) => {
        try {
            const response = await fetch('https://attendance-tracking.azurewebsites.net/Students', {
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

            console.log(formData);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <form
            className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
            onSubmit={handleSubmit(submitHandler)}
        >
            <TextInput
                label="Name"
                type="text"
                name="name"
                register={register}
                validation={{ required: true }}
            />
            {formState.errors.name && (
                <FormInputError>Student name must not be empty</FormInputError>
            )}

            <TextInput
                label="id"
                type="text"
                name="id"
                register={register}
                validation={{ required: true }}
            />

            {formState.errors.id && (
                <FormInputError>Student name must not be empty</FormInputError>
            )}

            <TextInput
                label="Email"
                type="text"
                name="email"
                register={register}
                validation={{ required: true }}
            />

            <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                Add Student
            </button>
        </form>
    );
};

export default NewStudentForm;