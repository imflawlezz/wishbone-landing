'use client';

import { LinkComponent } from "@/components/shared/LinkComponent";
import { resolveAsset } from "@/utils/resolveAsset";
import Image from "next/image";
import { motion } from "motion/react";

export const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row bg-[var(--background-hero)] items-center pt-16 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col md:w-1/2 gap-5 p-8 md:px-10 lg:px-25"
            >
                <p className="uppercase text-sm text-[var(--paragraph-secondary)]">
                    Wishbone+Partners
                </p>

                <h1 className="text-[var(--foreground)] text-4xl md:text-5xl lg:text-6xl">
                    The home of beautiful architecture.
                </h1>

                <p className="text-[var(--paragraph)]">
                    We are an architecture firm with a focus on beautiful but functional design.
                    At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work.
                    Read more about our previous projects, our process and our team below.
                </p>

                <LinkComponent label="Read More" />
            </motion.div>

            <div className="relative w-full md:w-1/2 h-72 md:h-[600px] lg:h-[720px]">
                <Image
                    src={resolveAsset('sections', 'hero.jpeg')}
                    alt="hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
};
