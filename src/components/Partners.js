"use client";
import { useState } from "react";
import ActionsMenu from "@/components/ActionsMenu";

export default function Partners({ activeTab, setActiveTab }) {
    //   const [activeTab, setActiveTab] = useState("potential");

    const suppliers = Array(20).fill({
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
        notes: "Request samples",
    });

    const [selectedRows, setSelectedRows] = useState([]);

    const toggleSelectAll = () => {
        setSelectedRows(selectedRows.length === suppliers.length ? [] : suppliers.map((_, i) => i));
    };

    const toggleRow = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const isAllSelected = selectedRows.length === suppliers.length;

    return (
        <div className="p-4">
            {/* Tabs */}
            <div className="flex space-x-2">
                <button
                    onClick={() => setActiveTab("potential")}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === "potential"
                        ? "bg-[#355E5B1F] text-[#355E5B] border border-b-0 border-[#355E5B1A] shadow-sm"
                        : "bg-[#FFFFFF] shadow-sm text-black hover:text-[355E5B]"
                        }`}
                >
                    Logistic Partners
                </button>
                <button
                    onClick={() => setActiveTab("active")}
                    className={`px-4 py-3 text-sm font-medium rounded-t-lg ${activeTab === "active"
                        ? "bg-[#355E5B1F] text-[#355E5B] border border-b-0 border-[#355E5B1A] shadow-sm"
                        : "bg-[#FFFFFF] shadow-sm text-black hover:text-[355E5B]"
                        }`}
                >
                    Customs & Compliance
                </button>
                <button
                    onClick={() => setActiveTab("provider")}
                    className={`px-4 py-3 text-sm font-medium rounded-t-lg ${activeTab === "provider"
                        ? "bg-[#355E5B1F] text-[#355E5B] border border-b-0 border-[#355E5B1A] shadow-sm"
                        : "bg-[#FFFFFF] shadow-sm text-black hover:text-[355E5B]"
                        }`}
                >
                    Service Provider
                </button>
                {/* Add more tabs as needed */}
            </div>

            {/* Table (shown only on "Potential Suppliers" tab) */}
            {activeTab === "potential" && (
                <>
                   
                    <div className="bg-white overflow-auto max-h-[calc(100vh-290px)] border border-gray-200">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-[#F4F4F4] text-gray-600 uppercase text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
                                <tr>
                                    <th className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            onChange={toggleSelectAll}
                                        />
                                    </th>
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
                                        "",
                                    ].map((header, idx) => (
                                        <th
                                            key={idx}
                                            className="px-6 py-3 font-[500] text-[#333333] text-[13px]"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((s, i) => (
                                    <tr
                                        key={i}
                                        className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50 ${selectedRows.includes(i) ? "bg-gray-50" : ""
                                            }`}
                                    >
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(i)}
                                                onChange={() => toggleRow(i)}
                                            />
                                        </td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.id}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.company}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.category}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.email}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.phone}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.country}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.contact}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.pm}</td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>
                                        <td className="px-6 py-3">
                                            <span className="bg-[#EAB9193D] text-[#EAB919] px-2 py-1 rounded text-xs">
                                                {s.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.notes}</td>
                                        <td className="text-center">
                                            <ActionsMenu />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* Placeholder for other tabs */}
            {activeTab === "active" && (
                <div className="bg-white overflow-auto max-h-[calc(100vh-290px)] border border-gray-200">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-[#F4F4F4] text-gray-600 uppercase text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
                            <tr>
                                <th className="px-4 py-3">
                                    <input
                                        type="checkbox"
                                        checked={isAllSelected}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
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
                                    "",
                                ].map((header, idx) => (
                                    <th
                                        key={idx}
                                        className="px-6 py-3 font-[500] text-[#333333] text-[13px]"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((s, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50 ${selectedRows.includes(i) ? "bg-gray-50" : ""
                                        }`}
                                >
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(i)}
                                            onChange={() => toggleRow(i)}
                                        />
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.id}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.company}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.category}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.email}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.phone}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.country}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.contact}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.pm}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>
                                    <td className="px-6 py-3">
                                        <span className="bg-[#EAB9193D] text-[#EAB919] px-2 py-1 rounded text-xs">
                                            {s.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.notes}</td>
                                    <td className="text-center">
                                        <ActionsMenu />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === "provider" && (
                <div className="bg-white overflow-auto max-h-[calc(100vh-290px)] border border-gray-200">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-[#F4F4F4] text-gray-600 uppercase text-xs sticky top-0 z-10 border border-[#EAECF0] whitespace-nowrap">
                            <tr>
                                <th className="px-4 py-3">
                                    <input
                                        type="checkbox"
                                        checked={isAllSelected}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
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
                                    "",
                                ].map((header, idx) => (
                                    <th
                                        key={idx}
                                        className="px-6 py-3 font-[500] text-[#333333] text-[13px]"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((s, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50 ${selectedRows.includes(i) ? "bg-gray-50" : ""
                                        }`}
                                >
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(i)}
                                            onChange={() => toggleRow(i)}
                                        />
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.id}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.company}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.category}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.email}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.phone}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.country}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.contact}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.pm}</td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>
                                    <td className="px-6 py-3">
                                        <span className="bg-[#EAB9193D] text-[#EAB919] px-2 py-1 rounded text-xs">
                                            {s.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.notes}</td>
                                    <td className="text-center">
                                        <ActionsMenu />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
