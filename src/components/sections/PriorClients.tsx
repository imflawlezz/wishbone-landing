'use client';
import {CustomersList} from "@/data/CustomersList";
import { motion } from "motion/react";
import Image from "next/image";
import {ContentWrap} from "@/components/shared/ContentWrap";

export const PriorClients = () => {
    return (
        <section
            className="w-full bg-[var(--paragraph)] text-[var(--background-hero)] py-8 md:py-12 lg:py-24">
            <ContentWrap className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24">
                <div className="w-full max-w-md xl:max-w-lg flex flex-col">
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

                <div className="w-full lg:flex-1 grid grid-cols-2 gap-10 md:gap-12 lg:gap-x-16 lg:gap-y-14 max-w-3xl">
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
                            className="flex items-center justify-center lg:justify-start"
                        >
                            <Image
                                src={item.imageURL}
                                alt={item.name}
                                width={224}
                                height={126}
                                className="object-contain w-full max-w-[9rem] sm:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem] h-auto aspect-video"
                            />
                        </motion.div>
                    ))}
                </div>
            </ContentWrap>
        </section>
    )
}
