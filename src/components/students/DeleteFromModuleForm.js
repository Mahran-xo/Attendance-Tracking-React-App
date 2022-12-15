import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import { useParams } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const DeleteFromModuleForm = (props) => {

    const params = useParams();
    const studentId = params.studentId;
    const { register, handleSubmit, formState } = useForm();

    const modulesOptions = props.module.map((s) => {
        return { name: s.moduleName, value: s._id };
    });

    
    const submitHandler = async (formData) => {
        try {
            const response = await fetch(`https://attendance-tracking.azurewebsites.net/Students/RemoveStudentFromModule/${studentId}`, {
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

            <SelectInput
                label="module"
                name="module"
                register={register}
                validation={{ required: true }}
                options={modulesOptions}
            />

            {formState.errors.module && (
                <FormInputError>module name must not be empty</FormInputError>
            )}

            <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                Remove From Module
            </button>
            

        </form>
        

        
    );
};

export default DeleteFromModuleForm;