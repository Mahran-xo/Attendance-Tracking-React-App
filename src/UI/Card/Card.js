const Card =(props)=>{
  return(
    <div className="flex flex-col items-center gap-5 rounded-xl bg-red-500 w-[400px] aspect-square overflow-hidden">
      {props.children}
    </div>
  );
};
export default Card;

//css example??
