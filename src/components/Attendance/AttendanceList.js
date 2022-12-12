import AttendanceSummary from './AttendanceSummary';

const AttendanceList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.Attendance.map((p) =>
       (<AttendanceSummary attendance={p} key={p._id} />))
      }
      
    </div>
  );
};



export default AttendanceList;

