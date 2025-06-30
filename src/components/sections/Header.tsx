'use client';

import { useState } from "react";
import Image from "next/image";
import { resolveAsset } from "@/utils/resolveAsset";
import { LinkComponent } from "@/components/shared/LinkComponent";
import { NavLinks } from "@/data/NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] px-6 md:px-12 lg:px-36 flex justify-between items-center h-16 md:h-auto">
            <div>
                <Image
                    src={resolveAsset("logos", "wishbone-logo.svg")}
                    alt="Logo"
                    width={220}
                    height={20}
                    className=""
                />
            </div>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8 py-4">
                {NavLinks.map((link, index) => (
                    <LinkComponent
                        key={index}
                        label={link.label}
                        isButton={link.isButton}
                        href={link.href}
                    />
                ))}
            </nav>

            <button
                className="md:hidden p-2 text-[var(--foreground)]"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
            >
                <Bars3Icon className="h-7 w-7" />
            </button>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[var(--background)] flex flex-col items-center justify-center gap-6 p-6 md:hidden"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-3 right-6 p-2"
                            aria-label="Close menu"
                        >
                            <XMarkIcon className="h-7 w-7 text-[var(--foreground)]" />
                        </button>

                        {NavLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.1 * index,
                                    ease: "easeOut"
                                }}
                            >
                                <LinkComponent
                                    label={link.label}
                                    isButton={link.isButton}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-xl"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
