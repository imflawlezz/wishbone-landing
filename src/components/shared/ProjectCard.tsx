'use client';
import {ProjectCardProps} from "@/types/ProjectCardProps";
import { motion } from "motion/react";
import Image from "next/image";

export const ProjectCard = ({
    label,
    description,
    imageURL,
    className
}: ProjectCardProps) => {
    return (
        <section className={`relative ${className} w-full
        h-[320px] md:h-[480px] lg:h-[600px]
        flex flex-row justify-end items-center px-6 md:px-18
        bg-gray-500/50 text-white md:bg-transparent`}>
            <div className="absolute inset-0 -z-10 h-full w-full">
                <Image
                    src={imageURL}
                    alt={label}
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.1
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col max-w-[200px] md:max-w-[290px] items-start gap-1"
            >
                <p className="text-sm font-medium md:text-[var(--paragraph)] uppercase tracking-wider">
                    {label}
                </p>
                <p className="text-base md:text-[var(--paragraph-secondary)]">
                    {description}
                </p>
            </motion.div>
        </section>
    )
}
