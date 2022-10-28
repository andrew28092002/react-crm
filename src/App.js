import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Edit from "./components/Edit/Edit";
import Tables from "./components/Tables/Tables";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AddForm />} />
        <Route
          path="/requests"
          element={<Tables />}
        />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
