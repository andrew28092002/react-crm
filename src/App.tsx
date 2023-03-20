import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit from "./components/Edit/EditPage";
import AddForm from "./components/Form/AddForm";
import Tables from "./components/Table/Table";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddForm />} />
          <Route path="/requests" element={<Tables />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/react-crm" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
