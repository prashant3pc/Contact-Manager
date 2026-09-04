import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import API from "../api";



function EditContact() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [contact, setContact] = useState({});




  useEffect(() => {


    load();


  }, []);





  const load = async () => {


    const res =

      await API.get(`/contacts/${id}`);


    setContact(res.data);


  }




  const update = async (e) => {


    e.preventDefault();


    await API.put(
      `/contacts/${id}`,
      contact
    );


    navigate(`/profile/${id}`);


  }





  return (

    <div className="p-10">


      <h1 className="text-4xl mb-5">

        Edit Contact

      </h1>



      <form

        onSubmit={update}

        className="space-y-4"


      >


        <input

          value={contact.name || ""}

          onChange={(e) =>

            setContact({

              ...contact,

              name: e.target.value

            })

          }

          className="input"

        />




        <input

          value={contact.email || ""}

          onChange={(e) =>

            setContact({

              ...contact,

              email: e.target.value

            })

          }

          className="input"

        />



        <input

          value={contact.phone || ""}

          onChange={(e) =>

            setContact({

              ...contact,

              phone: e.target.value

            })

          }

          className="input"

        />




        <button

          className="
bg-purple-600
p-3
rounded
"

        >

          Update

        </button>


      </form>


    </div>


  )

}



export default EditContact;