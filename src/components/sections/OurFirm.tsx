'use client';
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { resolveAsset } from "@/utils/resolveAsset";
import { motion } from "motion/react";
import {OurFirmParagraphs} from "@/data/OurFirmParagraphs";
import {ContentWrap} from "@/components/shared/ContentWrap";

export const OurFirm = () => {
    return (
        <section className="w-full py-8 md:py-16 lg:py-24 text-[var(--paragraph)]">
            <ContentWrap className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-12 lg:gap-16">
                <div>
                    <h1 className="text-3xl leading-tight">
                        Our firm
                    </h1>
                </div>

                <div className="flex flex-col gap-5 w-full md:max-w-xl lg:max-w-2xl text-sm md:text-base">
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
                            viewport={{ once: false, amount: 0.5 }}
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
            </ContentWrap>
        </section>
    );
};
