'use client';
import {motion} from "motion/react";
import {TeamMembersList} from "@/data/TeamMembersList";
import {TeamMemberCard} from "@/components/shared/TeamMemberCard";
import {LinkComponent} from "@/components/shared/LinkComponent";
import {ContentWrap} from "@/components/shared/ContentWrap";

export const Team = () => {
    return (
        <section className="w-full py-8 md:py-12 lg:py-24">
            <ContentWrap className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24">
                <div className="w-full max-w-md flex flex-col gap-4">
                    <h1 className="text-3xl">
                        Meet our team
                    </h1>

                    <p className="">
                        From seasoned industry leaders to emerging talents, our team thrives on collaboration, blending
                        expertise with fresh ideas. We believe great architecture is born not just from skill, but from
                        listening, adapting, and pushing boundaries together. This is the heart of our practice—where
                        individual strengths combine to create something extraordinary.
                    </p>

                    <LinkComponent label={"See team"} className="mt-6"/>
                </div>

                <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-8 max-w-3xl">
                    {TeamMembersList.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                                delay: 0.02 * index,
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                            className=""
                        >
                            <TeamMemberCard
                                firstName={member.firstName}
                                lastName={member.lastName}
                                occupation={member.occupation}
                                imageURL={member.imageURL}
                            />
                        </motion.div>
                    ))}
                </div>
            </ContentWrap>
        </section>
    )
}
