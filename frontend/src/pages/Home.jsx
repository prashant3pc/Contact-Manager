import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import API from "../api";

import ContactList from "../components/ContactList";

import SearchBar from "../components/SearchBar";



function Home() {



  const [contacts, setContacts] = useState([]);

  const [search, setSearch] = useState("");

  const [company, setCompany] = useState("");





  useEffect(() => {


    getContacts();


  }, []);







  const getContacts = async () => {


    try {


      const response = await API.get("/contacts");


      setContacts(response.data);


    }

    catch (error) {


      console.log(error);


    }


  }









  const filteredContacts = contacts.filter((contact) => {


    return (

      contact.name

        .toLowerCase()

        .includes(search.toLowerCase())



      &&



      (

        company === ""

        ||

        contact.company === company

      )



    )


  });








  return (



    <div className="p-10">





      <h1 className="
      text-5xl
      font-bold
      mb-10
      ">


        📇 Contact Manager


      </h1>






      <Link


        to="/add"


        className="
        bg-green-600
        px-5
        py-3
        rounded
        inline-block
        mb-8
        "


      >

        + Add Contact


      </Link>








      <div className="
      flex
      gap-5
      mb-8
      ">



        <SearchBar


          search={search}

          setSearch={setSearch}


        />







        <select


          className="
          bg-gray-800
          p-3
          rounded
          "



          onChange={(e) => setCompany(e.target.value)}



        >




          <option value="">


            All Companies


          </option>






          {

            [...new Set(

              contacts.map(c => c.company)

            )]

              .map(company => (


                <option

                  key={company}

                  value={company}

                >


                  {company}


                </option>


              ))


          }





        </select>





      </div>









      <ContactList


        contacts={filteredContacts}


      />








    </div>


  )



}



export default Home;