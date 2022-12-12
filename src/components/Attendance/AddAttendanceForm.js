
import { useForm } from 'react-hook-form';

import TextInput from '../../UI/form/TextInput';




import SelectInput from '../../UI/form/SelectInput';



const AddAttendanceForm = (props) => {


  const { register, handleSubmit, formState } = useForm();


  // const modulesOptions = props.moduleName.map((s) => {
  //   return { moduleName: s.name, value: s._id };
  // });
  const submitHandler = async (formData) => {

    try {
      const response = await fetch('https://attendancetracking.azurewebsites.net//Attendance', {
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
        label="LectureHall"
        type="text"
        name="LectureHall"
        register={register}
        validation={{ required: true }}
      />
      <TextInput
        label="moduleId"
        type="text"
        name="id"
        register={register}
        validation={{ required: true }}
      />
      {/* <SelectInput
        label="Module"
        name="supplierId"
        register={register}
        validation={{ required: true }}
        // options={modulesOptions}
      /> */}
 
      <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
        Add Attendance
      </button>
    </form>
  );
};

export default AddAttendanceForm;
