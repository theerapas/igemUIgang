import * as React from "react";
import Header from "./components/header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTaskPage from "./pages/CreateTaskPage";
import ResultPage from "./pages/ResultPage";
import Layout from "./layout";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="CreateTaskPage" element={<CreateTaskPage />} />
            <Route path="ResultPage" element={<ResultPage />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h1>Create New Task</h1>
          <AddTask saveTask={saveTask} />
        </div>
        <div style={{ width: "50%" }}>
          <TaskList />
        </div>
      </div>
      <NewTask /> */}
    </>
  );
}

export default App;
