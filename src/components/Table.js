"use client";

export default function Table() {
  const suppliers = Array(10).fill({
    id: "#547388",
    company: "ABC Company LTD.",
    category: "Raw Material",
    email: "abccompany@mail.com",
    phone: "+1 234-432-9876",
    country: "UAE",
    contact: "Jane Smith",
    pm: "Sarah Khan",
    date: "12/02/2023",
    status: "Onboarding",
    notes: "High reliability",
  });

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            {[
              "Company ID",
              "Supplier Company",
              "Category",
              "Email",
              "Phone",
              "Country",
              "Contact Person",
              "Assigned PM",
              "Date",
              "Status",
              "Notes",
            ].map((header, idx) => (
              <th key={idx} className="px-6 py-3">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {suppliers.map((s, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-6 py-3">{s.id}</td>
              <td className="px-6 py-3">{s.company}</td>
              <td className="px-6 py-3">{s.category}</td>
              <td className="px-6 py-3">{s.email}</td>
              <td className="px-6 py-3">{s.phone}</td>
              <td className="px-6 py-3">{s.country}</td>
              <td className="px-6 py-3">{s.contact}</td>
              <td className="px-6 py-3">{s.pm}</td>
              <td className="px-6 py-3">{s.date}</td>
              <td className="px-6 py-3">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  {s.status}
                </span>
              </td>
              <td className="px-6 py-3">{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

