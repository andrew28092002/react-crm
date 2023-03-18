import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Edit from "./components/Edit/EditPage";
import AddForm from "./components/Form/AddForm";
import Tables from "./components/Table/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddForm />} />
        <Route path="/requests" element={<Tables />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/react-crm" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
