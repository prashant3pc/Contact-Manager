import ContactCard from "./ContactCard";


function ContactList({ contacts }) {


  return (

    <div className="
grid
md:grid-cols-3
gap-6
mt-8
">


      {

        contacts.map((contact) => (

          <ContactCard

            key={contact.id}

            contact={contact}

          />


        ))

      }



    </div>

  )


}


export default ContactList;