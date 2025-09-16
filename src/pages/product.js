"use client";
import { useState } from "react";
import AddNewProductModal from "../components/AddNewProductModal";
import Link from "next/link";
import Product from "../components/Product";

export default function ProductPage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div>
                <div className="flex justify-between md:items-center items-baseline md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-[500] text-[#101828]">Products</h1>
                        <p className="text-[#202E2D] font-[100] text-[14px] m-0">
                            Manage all products supplied and ordered across your network with detailed tracking of pricing, categories, and availability.
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

                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
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
                        </button>
                        <AddNewProductModal isOpen={showModal} onClose={() => setShowModal(false)} />
                    </div>
                </div>
                <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" />
                <Product />
            </div>
        </>
    );
}
