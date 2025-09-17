'use client';
import Link from "next/link";
import Supplier from "../components/supplier";
import { useState } from "react";

const tabInfo = {
  potential: {
    title: "Suppliers",
    subtitle: "Manage and track supplier relationships, from first contact to long-term partnerships.",
   
  },
  active: {
    title: "Potential Suppliers",
    subtitle: "Manage and track supplier relationships, from first contact to long-term partnerships.",
   
  },
};



export default function SuppliersPage() {
  const [activeTab, setActiveTab] = useState("potential");
  return (
    <>
      <div>
        <div className="flex justify-between md:items-center items-baseline md:flex-row flex-col">
          <div>
            <h1 className="text-2xl font-[500] text-[#101828]">{tabInfo[activeTab].title}</h1>
            <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                {tabInfo[activeTab].subtitle}
            </p>
          </div>
          <div className="flex gap-3 md:flex-row flex-col md:mt-0 mt-3">
            <Link href="#" className="btn btn-filter">
              <div className="flex items-center gap-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                    stroke="#344054"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Filters
              </div>
            </Link>
            <Link href="#" className="btn btn-white">
              <div className="flex items-center gap-2">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6665 14.1667L9.99984 17.5M9.99984 17.5L13.3332 14.1667M9.99984 17.5V10M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613"
                    stroke="#344054"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Export
              </div>
            </Link>
            <Link href="/supplier/new" className="btn btn-primary">
              <div className="flex items-center gap-2">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99984 1.16667V12.8333M1.1665 7H12.8332"
                    stroke="white"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add New
              </div>
            </Link>
          </div>
        </div>
        <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" />
        <Supplier activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
