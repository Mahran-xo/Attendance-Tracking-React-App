import { useNavigate } from 'react-router-dom';
import Card from '../../UI/Card/Card';
import CardActions from '../../UI/Card/CardActions';
import CardBody from '../../UI/Card/CardBody';
import CardHeader from '../../UI/Card/CardHeader';

const StudentsSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/Students/${props.student._id}`);
  };
  return (
    <Card>
      <CardBody>
        <h3 className="font-bold">{props.student.name}</h3>
        <h5>{props.student.id}</h5>
        <h5>{props.student.email}</h5>
        <h5>{props.student.module.map((p) =>(
          <div>
         <li>{ p.moduleName }</li> 
         <li>{p.moduleCode}</li>
          
          </div>
        ))}</h5>
        
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

export default StudentsSummary;
