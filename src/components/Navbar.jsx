import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Navbar() {
    const { itemCount } = useCart();
    const linkClass = ({ isActive }) =>
        `relative py-2 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`;

    return (
        <nav className="border-b border-white/10 bg-slate-950 text-white">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="text-xl font-bold tracking-tight">
                    Signal & Sound
                </Link>
                <div className="flex items-center gap-5 sm:gap-7">
                    <NavLink to="/dashboard" className={linkClass}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/cart" className={linkClass}>
                        <span className="flex items-center gap-2">
                            Cart
                            {itemCount > 0 && (
                                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-400 px-1 text-xs font-bold text-slate-950">
                                    {itemCount}
                                </span>
                            )}
                        </span>
                    </NavLink>
                    <NavLink to="/checkout" className={linkClass}>
                        Checkout
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}