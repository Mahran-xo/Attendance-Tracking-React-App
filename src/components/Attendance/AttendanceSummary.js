import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const AttendanceSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/attendances/${props.attendance._id}`);
  };

  return (
    <Card>
      {/* <CardHeader>
        <img
          className="object-scale-down h-[300px]"
          src={props.attendance.imgURL}
          alt={props.attendance.name}
        />
      </CardHeader> */}
      <CardBody>
        <h3 className="font-bold">{props.attendance._id}</h3>
        <h5>{props.attendance.date} EGP</h5>
      </CardBody>
      <CardActions>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button>
      </CardActions>
    </Card>
  );
};

export default AttendanceSummary;