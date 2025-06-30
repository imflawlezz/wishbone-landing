import {Header} from "@/components/sections/Header";
import {Hero} from "@/components/sections/Hero";
import {OurFirm} from "@/components/sections/OurFirm";
import {ProjectCard} from "@/components/shared/ProjectCard";
import {ProjectCardsData} from "@/data/ProjectCardsData";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <OurFirm />
            <ProjectCard
                label={ProjectCardsData[0].label}
                description={ProjectCardsData[0].description}
                imageURL={ProjectCardsData[0].imageURL}
                className={ProjectCardsData[0].className}
            />
        </>
    );
}
