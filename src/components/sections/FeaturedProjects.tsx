import {FeaturedProjectCardsData} from "@/data/FeaturedProjectCardsData";
import {FeaturedProjectCard} from "@/components/shared/FeaturedProjectCard";
import {LinkComponent} from "@/components/shared/LinkComponent";

export const FeaturedProjects = () => {
    return (
        <section className="w-full p-8 md:px-12 lg:px-32 md:py-16 lg:py-24
        flex flex-col gap-10 justify-center bg-[var(--background-featured)]">
            <div className="flex flex-col items-start gap-4 justify-center">
                <h1 className="text-[var(--foreground)] text-3xl md:text-4xl">
                    Featured Projects
                </h1>
                <p className="text-lg md:text-2xl text-[var(--paragraph-secondary)]">
                    Some of the latest and greatest projects from us here at Wishbone+Partners.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
                {FeaturedProjectCardsData.map((item, index) => (
                    <FeaturedProjectCard
                        key={index}
                        name={item.name}
                        location={item.location}
                        imageURL={item.imageUrl}
                    />
                ))}
            </div>
            
            <LinkComponent label={"View all projects"} className={"self-center"}/>
        </section>
    )
}