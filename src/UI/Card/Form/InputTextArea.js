const InputText=(props)=>{
    return(
<div class="form-group mb-6">
<label className="text-white font-bold">{props.label}</label>
      <textarea
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
        {...props.register(props.name)}
    ></textarea>
    </div>
    );
};