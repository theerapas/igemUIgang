import NewTask from "../components/NewTask";
import BasicTable from "../components/table";

function MainPage() {
  return (
    <>
      <div className="Welcome">
        <h1>WELCOME "USERNAME"</h1>
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
