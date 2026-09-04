import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api";


function AddContact() {

  const navigate = useNavigate();


  const [form, setForm] = useState({

    name: "",
    email: "",
    phone: "",
    company: "",
    image: "https://i.pravatar.cc/300?img=5"

  });



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  const submit = async (e) => {

    e.preventDefault();


    try {

      const res = await API.post("/contacts", form);


      console.log("Contact Added:", res.data);


      navigate("/");


    } catch (error) {


      console.log(
        "Error:",
        error.response?.data || error.message
      );


      alert("Failed to add contact");


    }

  };





  return (

    <div className="p-10">


      <h1 className="text-4xl font-bold mb-8">

        Add Contact

      </h1>



      <form

        onSubmit={submit}

        className="
        bg-gray-900
        p-8
        rounded-xl
        max-w-md
        space-y-4
        "

      >


        <input

          name="name"

          placeholder="Name"

          value={form.name}

          onChange={handleChange}

          className="input"

        />



        <input

          name="email"

          placeholder="Email"

          value={form.email}

          onChange={handleChange}

          className="input"

        />



        <input

          name="phone"

          placeholder="Phone"

          value={form.phone}

          onChange={handleChange}

          className="input"

        />



        <input

          name="company"

          placeholder="Company"

          value={form.company}

          onChange={handleChange}

          className="input"

        />



        <input

          name="image"

          placeholder="Image URL"

          value={form.image}

          onChange={handleChange}

          className="input"

        />



        <button

          type="submit"

          className="
          bg-purple-600
          p-3
          rounded
          w-full
          text-white
          "

        >

          Save Contact

        </button>



      </form>


    </div>


  );

}


export default AddContact;