"use client";
import { useState } from "react";
import Logo from "./brand/page";
import Navigation from "./menu/page";
import WhatsApp from "./whatsapp/page";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative bg-white overflow-hidden">
            <section className="flex justify-between items-center w-full max-w-[1300px] mx-auto h-16 md:h-20">
                <Logo/>
                <Navigation />
                <WhatsApp/>
            </section>
            
        </header>
    );
}