'use client';
import {ProcessSteps} from "@/data/ProcessSteps";
import { motion } from "motion/react";
import Image from "next/image";
import {ContentWrap} from "@/components/shared/ContentWrap";

export const OurProcess = () => {
    return (
        <section className="w-full py-8 md:py-16 lg:py-24 text-center">
            <ContentWrap className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-sm text-[var(--paragraph-secondary)] uppercase">
                        Our process
                    </h2>
                    <h1 className="text-4xl">
                        How we do what we do.
                    </h1>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-between">
                    {ProcessSteps.map((step, index) => (
                        <motion.div
                            className="w-full flex-1 max-w-sm mx-auto md:mx-0 flex flex-row md:flex-col gap-6 md:gap-4
                            items-center justify-start"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                                delay: 0.1 * index
                            }}
                            viewport={{ once: false, amount: 0.5 }}>
                            <Image
                                src={step.imageURL}
                                alt={step.label}
                                height={100}
                                width={100}
                                className="max-w-16 sm:max-w-20  md:max-w-24"
                            />
                            <div className="flex flex-col gap-4 items-start md:items-center justify-start text-left md:text-center">
                                <p className="text-[var(--paragraph)] font-bold md:font-normal">
                                    {step.label}
                                </p>
                                <p className="text-[var(--paragraph-secondary)]">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ContentWrap>
        </section>
    )
}
