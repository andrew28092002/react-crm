import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import EditPage from "./components/Edit/EditPage";
import Table from "./components/Table/Table";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/requests"
          element={<Table />}
        />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
