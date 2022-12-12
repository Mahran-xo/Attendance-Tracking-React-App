// import { useForm } from 'react-hook-form';

// import TextInput from '../../UI/form/TextInput';



// const SubmitAbscenceForm = () => {


//   const { register, handleSubmit, formState } = useForm();

//   const submitHandler = async (formData) => {
//     try {
//       const response = await fetch('http://localhost:3000/Absence', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         // },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw Error(data.error);
//       }

//       console.log(formData);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <form
//       className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
//       onSubmit={handleSubmit(submitHandler)}
//     >
//       <TextInput
//         label="Reason"
//         type="text"
//         name="reason"
//         register={register}
//         validation={{ required: true }}
//       />
 
//       <button type="submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default SubmitAbscenceForm;