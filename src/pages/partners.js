import { useState } from 'react';
import Partners from "../components/Partners";
import LogisticModal from "../components/LogisticModal";
// import ComplianceModal from "../components/ComplianceModal";
// import ServiceModal from "../components/ServiceModal";

const tabTitles = {
    potential: "Logistic Partners",
    active: "Customs & Compliance Agencies",
    provider: "Service Provider",
};
const tabSpan = {
    potential: "Manage and track your trusted logistics providers in one place.",
    active: "Track and manage all customs & compliance partners in one place.",
    provider: "Track and collaborate with trusted service providers.",
};

export default function PartnersPage() {
    const [activeTab, setActiveTab] = useState("potential");

    // 🔧 Modal states
    const [showLogisticsModal, setShowLogisticsModal] = useState(false);
    // const [showComplianceModal, setShowComplianceModal] = useState(false);
    // const [showServiceModal, setShowServiceModal] = useState(false);

    // ✅ Move tabActions inside the component so it can access the modal state setters
    const tabActions = {
        potential: {
            label: "Add New",
            icon: (
                <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            onClick: () => setShowLogisticsModal(true),
        },
        active: {
            label: "Add New",
            icon: (
                <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            onClick: () => setShowComplianceModal(true),
        },
        provider: {
            label: "Add New",
            icon: (
                <svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            onClick: () => setShowServiceModal(true),
        },
    };

    return (
        <>
            <div>
                <div className="flex justify-between md:items-center items-baseline md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-[500] text-[#101828]">{tabTitles[activeTab]}</h1>
                        <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                            {tabSpan[activeTab]}
                        </p>
                    </div>
                    <div className="flex gap-3 md:flex-row flex-col md:mt-0 mt-3">
                        <button className="btn btn-filter">
                            <div className="flex items-center gap-2">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Filters
                            </div>
                        </button>

                        {/* ✅ Dynamic Add Button */}
                        <button className="btn btn-primary" onClick={tabActions[activeTab].onClick}>
                            <div className="flex items-center gap-2">
                                {tabActions[activeTab].icon}
                                {tabActions[activeTab].label}
                            </div>
                        </button>
                    </div>
                </div>

                <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" />
                <Partners activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* ✅ Render modals conditionally */}
                {showLogisticsModal && (
                    <LogisticModal
                        isOpen={showLogisticsModal}
                        onClose={() => setShowLogisticsModal(false)}
                    />
                )}

                {/* Add similar modals for Compliance & Service Provider if needed */}
                {/* {showComplianceModal && <ComplianceModal onClose={() => setShowComplianceModal(false)} />}
                {showServiceModal && <ServiceModal onClose={() => setShowServiceModal(false)} />} */}
            </div>
        </>
    );
}
