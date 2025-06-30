'use client';
import {CustomersList} from "@/data/CustomersList";
import { motion } from "motion/react";
import Image from "next/image";

export const PriorClients = () => {
    return (
        <section
            className="w-full flex flex-col md:flex-row bg-[var(--paragraph)] text-[var(--background-hero)]
            items-center justify-start gap-10 lg:gap-40
            lg:px-32 p-8 lg:py-24 md:py-12">
            <div className="md:max-w-md flex flex-col">
                <h2 className="text-sm uppercase leading-tight">
                    Prior clients
                </h2>

                <h1 className="text-white text-3xl">
                    Happy customers.
                </h1>

                <p className="mt-4">
                    At Wishbone+Partners, our greatest reward is the satisfaction of those we’ve had the privilege to
                    work with. From private homeowners to visionary developers, our clients’ trust inspires us to push
                    the boundaries of design.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-12 lg:gap-24">
                {CustomersList.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                            delay: 0.05 * index
                        }}
                        viewport={{ once: false, amount: 0.5 }}
                        className=""
                    >
                        <Image
                            src={item.imageURL}
                            alt={item.name}
                            width={128}
                            height={128}
                            className="object-contain max-w-32 aspect-video"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}