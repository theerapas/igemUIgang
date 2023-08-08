import NewTask from "../components/NewTask";
import BasicTable from "../components/table";
import TaskList from "../components/tasklist";

function MainPage() {
  return (
    <>
    <div class="Welcome">
      <h1>
        WELCOME "USERNAME"
      </h1>
    </div>
        <div style={{ width: "100%" }}>
          <NewTask />
        </div>
        <div style={{ width: "100%" }}>
          <BasicTable />
        </div>
    </>
  );
}

export default MainPage;
