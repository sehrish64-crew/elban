import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

export default function AddSupplierForm() {
    return (
        <main className="">
            <form className="space-y-8">
                {/* Header */}
                <header>
                    <h1 className="text-2xl font-semibold mb-1">Add Supplier</h1>
                    <p className="text-gray-600 text-sm">
                        Add supplier information for easy tracking and collaboration
                    </p>
                </header>

                {/* Company Information */}
                <section>
                    <h2 className="font-semibold mb-4 border-b border-gray-300 pb-2">
                        Company Information
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="url"
                            placeholder="Website"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="text"
                            placeholder="VAT ID / Tax number"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Company Registration ID"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Contact Person"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Contact Position"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <Select>
                            <SelectTrigger className="w-[170px] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal font-poppins">
                                <SelectValue placeholder="Monthly" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm font-poppins">
                                <SelectItem
                                    value="monthly"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative"
                                >
                                    Monthly
                                </SelectItem>
                                <SelectItem
                                    value="weekly"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative"
                                >
                                    Weekly
                                </SelectItem>
                                <SelectItem
                                    value="yearly"
                                    className="text-sm font-normal py-2 px-3 pl-8 relative"
                                >
                                    Yearly
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <input
                            type="text"
                            placeholder="Country"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="text"
                            placeholder="Street"
                            className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Head Office Address"
                            className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </section>

                {/* Commercial and Financial Data */}
                <section>
                    <h2 className="font-semibold mb-4 border-b border-gray-300 pb-2">
                        Commercial and Financial Data
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Licenses and Certifications"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Payment Terms
                            </option>
                            <option>100% Prepayment</option>
                            <option>Cash on Delivery (COD)</option>
                            <option>Net 30</option>
                            <option>Net 60</option>
                        </select>
                        <div className="grid grid-cols-2 gap-4">
                            <select
                                defaultValue=""
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="" disabled>
                                    Settlement Currency
                                </option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                            </select>
                            <select
                                defaultValue=""
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="" disabled>
                                    Payment Methods
                                </option>
                                <option>Bank Transfer</option>
                                <option>PayPal</option>
                                <option>Credit Card</option>
                                <option>Cash</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Cooperation History */}
                <section>
                    <h2 className="font-semibold mb-4 border-b border-gray-300 pb-2">
                        Cooperation History
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="number"
                            placeholder="Total Number of Orders"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="number"
                            placeholder="Total Transaction Volume"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Years of Cooperation
                            </option>
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                            <option>5+ Years</option>
                        </select>
                    </div>
                </section>

                {/* Operational Data */}
                <section>
                    <h2 className="font-semibold mb-4 border-b border-gray-300 pb-2">
                        Operational Data
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Supplier Type
                            </option>
                            <option>Manufacturer</option>
                            <option>Distributor</option>
                            <option>Retailer</option>
                        </select>
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Product Categories
                            </option>
                            <option>Electronics</option>
                            <option>Furniture</option>
                            <option>Clothing</option>
                        </select>

                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Operating Region
                            </option>
                            <option>North America</option>
                            <option>Europe</option>
                            <option>Asia</option>
                        </select>
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Available Transport Methods
                            </option>
                            <option>Air</option>
                            <option>Sea</option>
                            <option>Road</option>
                        </select>

                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Delivery Terms (Incoterms)
                            </option>
                            <option>FOB</option>
                            <option>CIF</option>
                            <option>EXW</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Just-in-Time Delivery Available"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="text"
                            placeholder="Minimum & Maximum Order Quantity"
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                            defaultValue=""
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Responsible Person
                            </option>
                            <option>John Doe</option>
                            <option>Jane Smith</option>
                            <option>Michael Brown</option>
                        </select>
                    </div>
                </section>

                {/* Cooperation Assessment */}
                <section>
                    <h2 className="font-semibold mb-4 border-b border-gray-300 pb-2">
                        Cooperation Assessment
                    </h2>
                    <div className="grid grid-cols-6 gap-4">
                        <select
                            defaultValue=""
                            className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Product Quality
                            </option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Poor</option>
                        </select>
                        <select
                            defaultValue=""
                            className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Delivery Punctuality
                            </option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Poor</option>
                        </select>
                        <select
                            defaultValue=""
                            className="col-span-2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Customer Service & Communication
                            </option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Poor</option>
                        </select>

                        <select
                            defaultValue=""
                            className="col-span-3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Flexibility in Negotiation
                            </option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Poor</option>
                        </select>
                        <select
                            defaultValue=""
                            className="col-span-3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled>
                                Business Risk Level
                            </option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </section>

                {/* General Notes */}
                <section>
                    <textarea
                        placeholder="General Notes"
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </section>

                {/* Buttons */}
                <section className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="px-5 py-2 rounded text-sm font-semibold border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-5 py-2 rounded text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        Add
                    </button>
                </section>
            </form>
        </main>
    );
}
