import { useForm } from 'react-hook-form';
import FormInputError from '../../UI/form/FormInputError';

import TextInput from '../../UI/form/TextInput';

const AddModuleForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('https://attendance-tracking.azurewebsites.net//Modules', {
        method: 'POST',
       
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
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
        label="Module Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Module name must not be empty</FormInputError>
      )}

<TextInput
        label="Module Code"
        type="text"
        name="code"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Module Code must not be empty</FormInputError>
      )}
      <TextInput
        label="Assigned professor"
        type="Text"
        name="professor"
        register={register}
        validation={{ required: true, min: 0 }}
      />
      {formState.errors.price && (
        <FormInputError>PAssigned Professor must be greater than 0.</FormInputError>
      )}


      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Module
      </button>
    </form>
  );
};

export default AddModuleForm;