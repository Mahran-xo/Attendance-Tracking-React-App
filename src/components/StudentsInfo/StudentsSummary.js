import Card from "../../UI/Card/Card";
import CardActions from "../../UI/Card/CardActions";
import CardBody from "../../UI/Card/CardBody";
import CardHeader from "../../UI/Card/CardHeader";
const StudentsSummary = (props) =>{

        return(
            <Card>
                <CardHeader>
                    <h1
                    className ="font-sans">
                     {props.student.name}
                      </h1>
                    
                </CardHeader>
                <CardBody>
                    <h2 className ="font-sans">{props.student.id}</h2>
                    <h2 className ="font-sans">{props.student.email}</h2>
                </CardBody>
                <CardActions>
                    <button className="bg-white py-1 px-10 font-bold rounded-xl">
                        View

                    </button>
                </CardActions>
            </Card>
        );
    };
export default StudentsSummary;