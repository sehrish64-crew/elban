import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Map font props to Tailwind classes
const fontMap = {
    poppins: "font-poppins",
    inter: "font-inter",
    roboto: "font-roboto",
    // add more fonts if needed
};

export default function Layout({ children, font = "poppins" }) {
    const [isOpen, setIsOpen] = useState(false);

    // Get the corresponding Tailwind class
    const fontClass = fontMap[font] || "font-poppins";

    return (
        <div className={`min-h-screen flex flex-col bg-gray-50 ${fontClass}`}>
            {/* ✅ Fixed Header */}
            <Header setIsOpen={setIsOpen} />

            {/* ✅ Main section */}
            <div className="flex flex-1" style={{margin:'0 0 0 20px'}}>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <main className="flex-1 p-6 overflow-y-auto" style={{boxShadow:'0px 0px 18px 0px #355E5B1A' , border:'solid 2px #EAECF0' , borderTopLeftRadius:'16px'}}>{children}</main>
            </div>
        </div>
    );
}
