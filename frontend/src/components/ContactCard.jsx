import { Link } from "react-router-dom";


function ContactCard({ contact }) {


  return (

    <div className="
bg-gray-900
rounded-xl
p-5
shadow-lg
">


      <img

        src={contact.image}

        className="
w-24
h-24
rounded-full
mx-auto
"

      />



      <h2 className="
text-xl
text-center
mt-3
font-bold
">

        {contact.name}

      </h2>


      <p className="text-center text-gray-400">

        {contact.company}

      </p>


      <p className="text-center">

        {contact.email}

      </p>



      <Link

        to={`/profile/${contact._id}`}

        className="
block
bg-purple-600
text-center
mt-4
p-2
rounded
"

      >

        View Profile

      </Link>


    </div>

  )

}


export default ContactCard;