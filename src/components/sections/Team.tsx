'use client';
import {motion} from "motion/react";
import {TeamMembersList} from "@/data/TeamMembersList";
import {TeamMemberCard} from "@/components/shared/TeamMemberCard";
import {LinkComponent} from "@/components/shared/LinkComponent";

export const Team = () => {
    return (
        <section
            className="w-full flex flex-col md:flex-row
            items-start justify-center gap-8 md:gap-10 lg:gap-40
            lg:px-32 p-8 lg:py-24 md:py-12">
            <div className="md:max-w-3xs lg:max-w-sm flex flex-col gap-4">
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

            <div className="flex flex-col md:grid grid-cols-2 gap-5 lg:gap-11">
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
        </section>
    )
}