import Header from "../component/Header";
import ProductTable from "../component/ProductTable";

const Dashboard = () => {
  return (
    <>
      <Header />

      {/* Page layout wrapper */}
      <div className="page-container">
        <ProductTable />
      </div>
    </>
  );
};

export default Dashboard;
