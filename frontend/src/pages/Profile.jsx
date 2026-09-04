import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../api";



function Profile() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [contact, setContact] = useState(null);



  useEffect(() => {

    loadProfile();

  }, []);





  const loadProfile = async () => {

    try {

      const res = await API.get(`/contacts/${id}`);

      setContact(res.data);


    } catch (error) {

      console.log(error);

    }

  };






  const deleteContact = async () => {


    try {


      await API.delete(`/contacts/${id}`);


      navigate("/");


    }

    catch (error) {

      console.log(error);

    }


  }





  if (!contact)

    return (

      <h1 className="text-white text-center mt-20">

        Loading...

      </h1>

    );





  return (


    <div className="
    min-h-screen
    flex
    justify-center
    items-center
    ">



      <div className="
      bg-gray-900
      p-10
      rounded-xl
      text-center
      w-96
      ">



        <img

          src={contact.image}

          className="
          w-40
          h-40
          rounded-full
          mx-auto
          "

        />





        <h1 className="
        text-3xl
        font-bold
        mt-5
        ">


          {contact.name}


        </h1>





        <p className="mt-3">

          🏢 {contact.company}

        </p>





        <p>

          📧 {contact.email}

        </p>





        <p>

          📞 {contact.phone}

        </p>





        <Link

          to={`/edit/${contact._id}`}

          className="
          block
          bg-purple-600
          p-3
          mt-5
          rounded
          "

        >

          Edit Profile


        </Link>






        <button

          onClick={deleteContact}

          className="
          bg-red-600
          p-3
          mt-3
          rounded
          w-full
          "

        >

          Delete Contact


        </button>





      </div>


    </div>


  )



}



export default Profile;