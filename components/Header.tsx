import NavLinks from "./NavLinks";
import { Suspense } from "react";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="text-2x1 font-bold">Onavino Ajenavi</div>
            <Suspense >
                <NavLinks />
            </Suspense>
        </header>
    );
}