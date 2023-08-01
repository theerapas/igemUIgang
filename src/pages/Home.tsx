import NewTask from "../components/NewTask";
import TaskList from "../components/tasklist";

function MainPage() {
  return (
    <>
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
