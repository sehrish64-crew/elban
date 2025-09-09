import Layout from "../components/Layout";
import Table from "../components/Table";

export default function Suppliers() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Suppliers</h1>
        <p className="text-gray-500 mb-6">
          Manage and track supplier relationships, from first contact to long-term partnerships.
        </p>
        <Table />
      </div>
    </Layout>
  );
}
