"use client";
import { useState } from "react";
import ActionsMenu from "@/components/ActionsMenu";

export default function Client() {


    const suppliers = Array(20).fill({
        id: "#547388",
        company: "Safety Helmet",
        category: "Construction",
        email: "ABC Metals",
        phone: "$ 45",
        country: "200 pcs",
        img: "/cap.png",
        pm: "Sarah Khan",
        date: "12/02/2023",
        status: "Active",
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
        <div className="bg-white rounded-lg overflow-auto max-h-[calc(100vh-290px)] border border-gray-200">
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
                            "ID",
                            "Product Name",
                            "Category",
                            "Supplier Company",
                            "Unit Price",
                            "Stock Quantity",
                            "Image",
                            "Contact Person ",
                            "Date",
                            "Status",
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
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">
                                <img
                                    src={s.img || "/cap.png"}
                                    className="w-10 h-10 object-cover rounded"
                                />
                            </td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.pm}</td>
                            <td className="px-6 py-3 text-[#202E2D99] text-[13px] font-[400]">{s.date}</td>
                            <td className="px-6 py-3">
                                <span className="bg-[#4EC48333] text-[#4EC483] px-2 py-1 rounded text-xs">
                                    {s.status}
                                </span>
                            </td>
                            <td className="text-center">
                                <ActionsMenu />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
