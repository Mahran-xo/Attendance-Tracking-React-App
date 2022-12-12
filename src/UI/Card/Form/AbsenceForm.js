import React from 'react';





const userN = () =>{
  const [Title,setuser] = useState([]);
}


const email = () =>{
  const [title,setemail] = useState([]);
}

const AbsenceF = () =>{
  const [Title,setabsence] = useState([]);
}

const handleSubmit = (e) =>{
  e.preventDefault()
  const AbsenceForm = {username,password,email}
  fetch('http://localhost8000/ATTENDANCE-TRACKING-REACT-APP')
  method: 'POST'
 



}


const AbsenceForm = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 >
          Absence Form
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your name</span>
              <input onChange={(u) => setTitle(u.target.value)}
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">email</span>
              <input onChange={(e) => setTitle(e.target.value)}
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span onChange={(a) => setTitle(a.target.value)}
              class="text-gray-700">reason for Absence</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Submit Form
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default AbsenceForm;