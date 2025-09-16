import Link from "next/link";
import { useRouter } from "next/router";
import { X, Home, Users, } from "lucide-react";

const menuItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Suppliers", href: "/suppliers", icon: Users },

    {
        name: "Clients",
        href: "/client",
        icon: ({ color }) => (
            <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={color}
            >
                <path
                    d="M15.5 13.1974C16.7132 13.8069 17.7534 14.785 18.5127 16.008C18.663 16.2502 18.7382 16.3713 18.7642 16.539C18.817 16.8798 18.584 17.2988 18.2666 17.4336C18.1104 17.5 17.9347 17.5 17.5833 17.5M13.8333 9.6102C15.0681 8.99657 15.9167 7.72238 15.9167 6.25C15.9167 4.77762 15.0681 3.50343 13.8333 2.8898M12.1667 6.25C12.1667 8.32107 10.4877 10 8.41665 10C6.34559 10 4.66665 8.32107 4.66665 6.25C4.66665 4.17893 6.34559 2.5 8.41665 2.5C10.4877 2.5 12.1667 4.17893 12.1667 6.25ZM2.63268 15.782C3.96127 13.7871 6.0578 12.5 8.41665 12.5C10.7755 12.5 12.872 13.7871 14.2006 15.782C14.4917 16.219 14.6372 16.4375 14.6205 16.7166C14.6074 16.9339 14.4649 17.2 14.2913 17.3313C14.0683 17.5 13.7615 17.5 13.148 17.5H3.68528C3.0718 17.5 2.76505 17.5 2.54202 17.3313C2.36836 17.2 2.22589 16.9339 2.21285 16.7166C2.19609 16.4375 2.34162 16.219 2.63268 15.782Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            </svg>
        )
    },

    {
        name: "Products",
        href: "/product",
        icon: ({ color }) => (
            <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.5833 6.06478L10.5 9.99996M10.5 9.99996L3.41664 6.06478M10.5 9.99996L10.5 17.9167M18 13.3821V6.61786C18 6.33232 18 6.18956 17.9579 6.06222C17.9207 5.94958 17.8599 5.84618 17.7795 5.75893C17.6886 5.66032 17.5638 5.59099 17.3142 5.45232L11.1475 2.02639C10.9112 1.89509 10.793 1.82944 10.6679 1.80371C10.5571 1.78093 10.4429 1.78093 10.3321 1.80371C10.207 1.82944 10.0888 1.89509 9.85248 2.02639L3.68581 5.45232C3.43621 5.59099 3.3114 5.66032 3.22053 5.75894C3.14013 5.84618 3.07929 5.94958 3.04207 6.06223C3 6.18956 3 6.33233 3 6.61786V13.3821C3 13.6677 3 13.8104 3.04207 13.9378C3.07929 14.0504 3.14013 14.1538 3.22053 14.241C3.3114 14.3397 3.43621 14.409 3.68581 14.5477L9.85248 17.9736C10.0888 18.1049 10.207 18.1705 10.3321 18.1963C10.4429 18.219 10.5571 18.219 10.6679 18.1963C10.793 18.1705 10.9112 18.1049 11.1475 17.9736L17.3142 14.5477C17.5638 14.409 17.6886 14.3397 17.7795 14.241C17.8599 14.1538 17.9207 14.0504 17.9579 13.9378C18 13.8104 18 13.6677 18 13.3821Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.25 7.91667L6.75 3.75"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        )
    },
    // {
    //     name: "Orders",
    //     href: "/order",
    //     icon: ({ color }) => (
    //         <svg
    //             width={21}
    //             height={20}
    //             viewBox="0 0 21 20"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //                 d="M17.5833 6.06478L10.5 9.99996M10.5 9.99996L3.41664 6.06478M10.5 9.99996L10.5 17.9167M18 13.3821V6.61786C18 6.33232 18 6.18956 17.9579 6.06222C17.9207 5.94958 17.8599 5.84618 17.7795 5.75893C17.6886 5.66032 17.5638 5.59099 17.3142 5.45232L11.1475 2.02639C10.9112 1.89509 10.793 1.82944 10.6679 1.80371C10.5571 1.78093 10.4429 1.78093 10.3321 1.80371C10.207 1.82944 10.0888 1.89509 9.85248 2.02639L3.68581 5.45232C3.43621 5.59099 3.3114 5.66032 3.22053 5.75894C3.14013 5.84618 3.07929 5.94958 3.04207 6.06223C3 6.18956 3 6.33233 3 6.61786V13.3821C3 13.6677 3 13.8104 3.04207 13.9378C3.07929 14.0504 3.14013 14.1538 3.22053 14.241C3.3114 14.3397 3.43621 14.409 3.68581 14.5477L9.85248 17.9736C10.0888 18.1049 10.207 18.1705 10.3321 18.1963C10.4429 18.219 10.5571 18.219 10.6679 18.1963C10.793 18.1705 10.9112 18.1049 11.1475 17.9736L17.3142 14.5477C17.5638 14.409 17.6886 14.3397 17.7795 14.241C17.8599 14.1538 17.9207 14.0504 17.9579 13.9378C18 13.8104 18 13.6677 18 13.3821Z"
    //                 stroke={color}
    //                 strokeWidth="1.5"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //         </svg>


    //     )
    // },
    // {
    //     name: "Reports",
    //     href: "/report",
    //     icon: ({ color }) => (
    //         <svg
    //             width={21}
    //             height={20}
    //             viewBox="0 0 21 20"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //                 d="M12.1667 9.16669H7.16668M8.83334 12.5H7.16668M13.8333 5.83335H7.16668M17.1667 5.66669V14.3334C17.1667 15.7335 17.1667 16.4336 16.8942 16.9683C16.6545 17.4387 16.2721 17.8212 15.8017 18.0609C15.2669 18.3334 14.5668 18.3334 13.1667 18.3334H7.83334C6.43321 18.3334 5.73315 18.3334 5.19837 18.0609C4.72796 17.8212 4.34551 17.4387 4.10583 16.9683C3.83334 16.4336 3.83334 15.7335 3.83334 14.3334V5.66669C3.83334 4.26656 3.83334 3.56649 4.10583 3.03171C4.34551 2.56131 4.72796 2.17885 5.19837 1.93917C5.73315 1.66669 6.43321 1.66669 7.83334 1.66669H13.1667C14.5668 1.66669 15.2669 1.66669 15.8017 1.93917C16.2721 2.17885 16.6545 2.56131 16.8942 3.03171C17.1667 3.56649 17.1667 4.26656 17.1667 5.66669Z"
    //                 stroke={color}
    //                 strokeWidth="1.5"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //         </svg>

    //     )
    // },

];

export default function Sidebar({ isOpen, setIsOpen }) {
    const router = useRouter();

    return (
        <aside
            className={`fixed p-[10px] md:static top-0 left-0 h-full md:h-auto md:w-[101px] w-64 bg-[#355E5B] text-white flex flex-col transform transition-transform duration-300
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
                            className={`flex md:flex-col flex-row items-center gap-2 px-6 py-3 rounded-lg transition 
                ${isActive ? "bg-white" : "hover:bg-[#d3d7d91f]"}`}
                            onClick={() => setIsOpen(false)}
                            style={{
                                borderBottom: isActive ? "6px solid rgb(0 0 0 / 0.25)" : "none",
                            }}
                        >
                            <item.icon
                                className="w-5 h-5"
                                color={isActive ? "#355E5B" : "#fff"} // pass color prop here
                            />
                            <span
                                className={`text-[12px] text-center ${isActive ? "text-[#355E5B]" : "text-white"}`}
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
