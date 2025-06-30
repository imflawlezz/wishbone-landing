'use client';
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { resolveAsset } from "@/utils/resolveAsset";
import { motion } from "motion/react";
import {OurFirmParagraphs} from "@/data/OurFirmParagraphs";

export const OurFirm = () => {
    return (
        <section className="flex flex-col md:flex-row md:py-16 p-8 lg:py-24 gap-6 md:gap-12 lg:gap-32 w-full justify-center text-[var(--paragraph)]">
            <div>
                <h1 className="text-3xl leading-tight">
                    Our firm
                </h1>
            </div>

            <div className="flex flex-col gap-4 w-full md:max-w-xl text-sm md:text-base">
                {OurFirmParagraphs.map((text, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.1 * index
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {text}
                    </motion.p>
                ))}

                <TeamMemberCard
                    firstName={"Stephen"}
                    lastName={"Collier"}
                    occupation={"Senior Partner"}
                    imageURL={resolveAsset('team', 'stephen-c.jpeg')}
                    className={'mt-2'}
                />
            </div>
        </section>
    );
};
