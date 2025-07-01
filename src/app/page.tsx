import {Header} from "@/components/sections/Header";
import {Hero} from "@/components/sections/Hero";
import {OurFirm} from "@/components/sections/OurFirm";
import {ProjectCard} from "@/components/shared/ProjectCard";
import {ProjectCardsData} from "@/data/ProjectCardsData";
import {OurProcess} from "@/components/sections/OurProcess";
import {PriorClients} from "@/components/sections/PriorClients";
import {FeaturedProjects} from "@/components/sections/FeaturedProjects";
import {Team} from "@/components/sections/Team";
import {GetInTouch} from "@/components/sections/GetInTouch";

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
            <OurProcess />
            <ProjectCard
                label={ProjectCardsData[1].label}
                description={ProjectCardsData[1].description}
                imageURL={ProjectCardsData[1].imageURL}
                className={ProjectCardsData[1].className}
            />
            <PriorClients />
            <ProjectCard
                label={ProjectCardsData[2].label}
                description={ProjectCardsData[2].description}
                imageURL={ProjectCardsData[2].imageURL}
                className={ProjectCardsData[2].className}
            />
            <FeaturedProjects />
            <Team />
            <GetInTouch/>
        </>
    );
}
