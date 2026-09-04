import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route path="/" element={<Home />} />


        <Route path="/profile/:id" element={<Profile />} />


        <Route path="/edit/:id" element={<EditContact />} />

        <Route
          path="/add"
          element={<AddContact />}
        />

      </Routes>


    </BrowserRouter>

  )

}

export default App;