import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import MultiSelectTags from "../MultiSelectTags";
import PaymentTermsSelectTag from "../PaymentTermsSelectTag";

export default function AddClientForm() {
    return (
        <main className="">
            <form className="space-y-8">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold mb-1">Add Client</h1>
                    <p className="text-gray-600 text-sm">
                        Add client information for seamless project and communication management.
                    </p>
                </header>

                {/* Company Information */}
                <div className="overflow-auto max-h-[calc(100vh-310px)] p-1">
                    <section>
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] font-[400] text-[18px]">
                            Company Information
                        </h2>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Company Name</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Email Address</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Phone Number</label>
                                <input
                                    type="phone"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Website</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">VAT ID / Tax number</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Company Registration ID</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Contact Person</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Contact Position</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Legal Form </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Country</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">City</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Postal Code</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Street</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Head Office Address</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>

                        </div>
                    </section>

                    {/* Commercial and Financial Data */}
                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] font-[400] text-[18px]">
                            Commercial and Financial Data
                        </h2>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Terms</label>
                                <PaymentTermsSelectTag />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Discounts and Loyalty Programs</label>
                                <MultiSelectTags />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Settlement Currency</label>
                                <MultiSelectTags />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Methods</label>
                                <PaymentTermsSelectTag />
                            </div>

                        </div>
                    </section>


                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] font-[400] text-[18px]">
                            Cooperation History
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Total Number of Orders</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Total Transaction Volume </label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Years of Cooperation </label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] font-[400] text-[18px]">
                            Cooperation Details
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Purchase Frequency</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Average Order Value </label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Operating region</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Preferred Product Categories</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Delivery Method</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Fulfillment Options</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Delivery Addresses</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Responsible Person</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                    </section>


                    <section className="mt-5">
                        <h2 className="font-semibold mb-4 border-b border-[#355E5B] pb-3 text-[#202E2D] font-[400] text-[18px]">
                            Cooperation Assessment
                        </h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Communication Quality</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Payment Timeliness</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Complaint / Return History</label>
                                <input
                                    type="text"
                                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm"
                                />
                            </div>

                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Flexibility in Negotiation</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">Business Risk Level</label>
                                <Select>
                                    <SelectTrigger className="shadow-sm w-full h-[46px] focus:outline-none focus:ring-1 focus:ring-[#355E5B] border border-[#D0D5DD] px-2 py-3 rounded-[8px] font-poppins">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins bg-[#fff] w-full">
                                        <SelectItem
                                            value="Form 1"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 1
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 2
                                        </SelectItem>
                                        <SelectItem
                                            value="Form 2"
                                            className="text-sm font-normal py-2 px-3 pl-8 relative hover:bg-[#355E5B] hover:text-[#fff] cursor-pointer"
                                        >
                                            Form 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="form-group flex-col flex gap-2">
                                <label htmlFor="" className="text-[#202E2D] ">General Notes</label>
                                <textarea name="" id="" className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#355E5B] shadow-sm resize-none"></textarea>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Buttons */}
                <section className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </section>

            </form>
        </main>
    );
}
