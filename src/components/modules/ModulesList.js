import ModulesSummary from "./ModulesSummary";
const ModulesList = (props) => {
    return (
      <div className="grid grid-cols-2 gap-5 justify-center items-center">
        {props.module.map((p) => (<ModulesSummary module={p} key={p._id} />))
        }
        
      </div>
    );
  };

  export default  ModulesList;