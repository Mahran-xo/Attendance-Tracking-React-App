const Select=(props)=>{
    return(
        <div className="form-group mb-6">
        <label className="form-label inline-block mb-2 text-gray-700">{props.label}</label>
        <select
          className="rounded-lg min-w-[250px] p-2"
          {...props.register(props.name)}
        >
          {props.options.map((o) => (
            <option value={o.value} key={o.value}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
    );
};

