
import { useForm } from 'react-hook-form';

import TextInput from '../../UI/form/TextInput';


import Multiselect from 'multiselect-react-dropdown';

import SelectInput from '../../UI/form/SelectInput';



const AddAttendanceForm = (props) => {


  const { register, handleSubmit, formState } = useForm();


  const modulesOptions = props.module.map((s) => {
    return { name: s.moduleName, value: s._id };
  });
  const submitHandler = async (formData) => {

    try {
      const response = await fetch('https://attendance-tracking.azurewebsites.net/Attendance', {
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
        label="lectureHall"
        type="text"
        name="lectureHall"
        register={register}
        validation={{ required: true }}
      />
      <SelectInput
        label="Module"
        name="moduleId"
        register={register}
        validation={{ required: true }}
        options={modulesOptions}

      />
 
      <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
        Add Attendance
      </button>
    </form>
  );
};

export default AddAttendanceForm;




