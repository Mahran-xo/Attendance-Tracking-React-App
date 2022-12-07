const CardHeader =(props)=>{
    return(
        <div className="flex items-center justify-center bg-red-400 w-full">
            {props.children}
        </div>
    );
};

export default CardHeader;