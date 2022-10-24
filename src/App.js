import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Edit from "./components/Edit/Edit";
import Tables from "./components/Tables/Tables";


function App() {

  const [flag, setFlag] = useState(false)

  const updateFlag = () => {
    setFlag(!flag)
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AddForm />} />
        <Route
          path="/requests"
          element={<Tables updateFlag={updateFlag} flag={flag}/>}
        />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
