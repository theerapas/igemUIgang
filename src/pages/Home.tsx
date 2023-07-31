import NewTask from "../components/NewTask";
import Header from "../components/header";
import TaskList from "../components/tasklist";

function MainPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <NewTask />
        </div>
        <div style={{ width: "50%" }}>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default MainPage;
