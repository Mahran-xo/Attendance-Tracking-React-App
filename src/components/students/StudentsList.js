import StudentsSummary from './StudentsSummary';

const StudentsList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.Students.map((p) =>
       (<StudentsSummary student={p} key={p._id} />))
      }
      
    </div>
  );
};



export default StudentsList;

