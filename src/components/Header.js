import { Bell, Search, User, Menu } from "lucide-react";
import Image from "next/image";

export default function Header({ setIsOpen }) {
  return (
    <header className="flex items-center justify-between p-[25px] sticky top-0 z-40 w-full">
      {/* Left Section: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Search Input */}
        <div className="">
        <Image src="/logo.png" alt="Logo" width={200} height={40} />
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <User className="w-6 h-6 rounded-full bg-gray-200 p-1 cursor-pointer" />
      </div>
    </header>
  );
}
