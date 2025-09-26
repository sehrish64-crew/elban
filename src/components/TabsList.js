// components/Tabs.js
import { useState } from 'react';
import Detailinformation from './Detailinformation';
import SupplierLogs from './SupplierLogs';
const tabList = [
    { id: 1, label: "Detail Information" },
    { id: 2, label: "Quotes" },
    { id: 3, label: "Notes & Summaries" },
    { id: 4, label: "Orders" },
    { id: 5, label: "Products" },
    { id: 6, label: "Events" },
    { id: 7, label: "Financials" },
    { id: 8, label: "Logs" },
    { id: 9, label: "Complaints" },
    { id: 10, label: "Attachments" },
    { id: 11, label: "Reports" },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="">
            {/* Tabs */}
            <div className="flex border-b border-[#EAECF0] gap-2 overflow-x-auto scrollbar-hide w-[100%]">
                {tabList.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-2 py-2 rounded-t-md text-sm font-medium transition-all w-[100%] duration-200 whitespace-nowrap overflow-x-auto scrollbar-hide 
                         ${activeTab === tab.id
                                ? "bg-[#355E5B1F] text-[#355E5B]"
                                : "bg-white text-[#202E2D] hover:bg-[#355E5B1F] hover:text-[#355E5B]"
                            }`}
                        style={
                            activeTab === tab.id
                                ? {
                                    boxShadow: "0px 0px 4px 0px #355E5B3D",
                                    borderBottom: "none",
                                }
                                : {
                                    boxShadow: "0px 0px 4px 0px #355E5B33",
                                }
                        }
                    >
                        {tab.label}
                    </button>

                ))}
            </div>

            {/* Content */}
            <div className="mt-6 p-4 rounded-md bg-white" style={{ boxShadow: "0 0 4px 0 #355E5B52" }}>
                {activeTab === 1 &&
                    <>
                        <Detailinformation />
                    </>
                }
                {activeTab === 2 && <p>This is the content for <strong>Quotes</strong>.</p>}
                {activeTab === 3 && <p>This is the content for <strong>Notes & Summaries</strong>.</p>}
                {activeTab === 4 && <p>This is the content for <strong>Orders</strong>.</p>}
                {activeTab === 5 && <p>This is the content for <strong>Products</strong>.</p>}
                {activeTab === 6 && <p>This is the content for <strong>Events</strong>.</p>}
                {activeTab === 7 && <p>This is the content for <strong>Financials</strong>.</p>}
                {activeTab === 8 &&
                    <>
                        <SupplierLogs />
                    </>
                }
                {activeTab === 9 && <p>This is the content for <strong>Complaints</strong>.</p>}
                {activeTab === 10 && <p>This is the content for <strong>Attachments</strong>.</p>}
                {activeTab === 11 && <p>This is the content for <strong>Reports</strong>.</p>}
            </div>
        </div>
    );
}
