const InputText=(props)=>{
    return(
<div className="form-group mb-6">
<label className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
      <input
      className="form-controlblock w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type = {props.type}
        {...props.register(props.name)}
    ></input>
    </div>
    );
};

