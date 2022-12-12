import { useNavigate } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import CardActions from '../../UI/Card/CardActions';
import CardBody from '../../UI/Card/CardBody';
import CardHeader from '../../UI/Card/CardHeader';

const StudentsSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  // const navigate = useNavigate();

  // const btnOnClickHandler = () => {
  //   navigate(`/Students/${props.Students._id}`);
  // };

  return (
    <Card>
      {/* <CardHeader>
        <img
          className="object-scale-down h-[300px]"
          src={props.product.imgURL}
          alt={props.product.name}
        />
      </CardHeader> */}
      <CardBody>
        <h3 className="font-bold">{props.student.name}</h3>
        <h5>{props.student.id}</h5>
        <h5>{props.student.email}</h5>
    
      </CardBody>
      <CardActions>
        {/* <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button> */}
      </CardActions>
    </Card>
  );
};

export default StudentsSummary;
