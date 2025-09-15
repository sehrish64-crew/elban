import Link from "next/link";
import { useRouter } from "next/router";
import { X, Home, Users, BarChart3, DollarSign, Settings } from "lucide-react";
import PotentialSuppliersIcon from "@/components/icons/PotentialSuppliersIcon";
import ClientIcon from "@/components/icons/ClientIcon";
import PotentialIcon from "@/components/icons/PotentialIcon";
import ProductsIcon from "@/components/icons/ProductsIcon";
import OrderIcon from "@/components/icons/OrderIcon";
import ReportIcon from "@/components/icons/ReportIcon";

const menuItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Suppliers", href: "/suppliers", icon: Users },
    {
        name: "Potential Suppliers",
        href: "/patient",
        icon: PotentialSuppliersIcon,
    },
    {
        name: "Clients",
        href: "/client",
        icon: ClientIcon
    },
    {
        name: "Potential Client",
        href: "/potential",
        icon: PotentialIcon
    },
    {
        name: "Products",
        href: "/product",
        icon: ProductsIcon
    },
    {
        name: "Orders",
        href: "/order",
        icon: OrderIcon
    },
    {
        name: "Reports",
        href: "/report",
        icon: ReportIcon
    },

];

export default function Sidebar({ isOpen, setIsOpen }) {
    const router = useRouter();

    return (
        <aside
            className={`fixed p-[10px] md:static top-0 left-0 h-full md:h-auto md:w-[101px] w-64 bg-[#355E5B] text-white flex flex-col z-50 transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            style={{ borderTopLeftRadius: "12px" }}
        >
            {/* Mobile close button */}
            <div className="flex items-center justify-between md:justify-center text-lg mt-[10px] pr-[10px] md:mt-0 md:pr-0">
                <button className="md:hidden" onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1">
                {menuItems.map((item) => {
                    const isActive = router.pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex md:flex-col flex-row items-center gap-2 px-6 py-3 rounded-lg transition ${isActive ? "bg-white" : "hover:bg-[#d3d7d91f]"
                                }`}
                            onClick={() => setIsOpen(false)}
                            style={{
                                borderBottom: isActive ? "6px solid rgb(0 0 0 / 0.25)" : "none",
                            }}
                        >
                            <item.icon
                                className="w-5 h-5"
                                style={{ color: isActive ? "#355E5B" : "#fff" }}
                            />
                            <span
                                className="text-[12px] text-center"
                                style={{ color: isActive ? "#355E5B" : "#fff" }}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
