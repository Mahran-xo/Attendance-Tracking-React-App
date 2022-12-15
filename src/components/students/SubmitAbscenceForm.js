import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import SelectInput from '../../UI/form/SelectInput';
import TextInput from '../../UI/form/TextInput';



const SubmitAbscenceForm = (props) => {
  const params = useParams();
  const studentId = params.studentId ;

  const { register, handleSubmit, formState } = useForm();

  const modulesOptions = props.module.map((s) => {
    return { name: s.moduleName, value: s._id };
  });
  

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(`https://attendance-tracking.azurewebsites.net/Absence/${studentId} `, {
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
        label="Reason"
        type="text"
        name="reason"
        register={register}
        validation={{ required: true }}

      />
        <SelectInput
        label="module"
        name="module"
        register={register}
        validation={{ required: true }}
        options={modulesOptions}
      />
 
      <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
        Submit
      </button>
    </form>
  );
};

export default SubmitAbscenceForm;