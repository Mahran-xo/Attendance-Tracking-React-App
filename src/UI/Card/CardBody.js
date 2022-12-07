const CardBody =(props)=>{
    return(
        <div className="flex flex-col justify-center items-center gap-1">
            {props.children}
        </div>
    );
};
export default CardBody;