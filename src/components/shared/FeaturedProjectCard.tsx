'use client';

import { FeaturedProjectCardProps } from "@/types/FeaturedProjectCardProps";
import Image from "next/image";
import { LinkComponent } from "@/components/shared/LinkComponent";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export const FeaturedProjectCard = ({
                                        name,
                                        location,
                                        imageURL,
                                        href,
                                        className
                                    }: FeaturedProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 1, once: false });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const shouldAnimate = isMobile ? isInView : isHovered;

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className} w-full md:max-w-sm h-[360px] lg:h-[460px]`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <Image
                src={imageURL}
                alt={name}
                fill
                className="z-10 object-cover transition-transform duration-500"
                priority={false}
            />

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={shouldAnimate ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="absolute top-10 left-10 z-20"
            >
                <p className="text-sm uppercase text-[var(--paragraph-secondary)]">{location}</p>
                <h2 className="text-xl md:text-2xl text-[var(--paragraph)]">{name}</h2>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={shouldAnimate ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="absolute bottom-10 left-10 z-20"
            >
                <LinkComponent
                    label="Read more"
                    href={href}
                    isButton={true}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={shouldAnimate ? { opacity: 0.15 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white z-10 pointer-events-none"
            />
        </div>
    );
};
