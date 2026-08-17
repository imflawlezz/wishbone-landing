import {FeaturedProjectCardsData} from "@/data/FeaturedProjectCardsData";
import {FeaturedProjectCard} from "@/components/shared/FeaturedProjectCard";
import {LinkComponent} from "@/components/shared/LinkComponent";
import {ContentWrap} from "@/components/shared/ContentWrap";

export const FeaturedProjects = () => {
    return (
        <section className="w-full py-8 md:py-16 lg:py-24 bg-[var(--background-featured)]">
            <ContentWrap className="flex flex-col gap-10">
                <div className="flex flex-col items-start gap-4 max-w-3xl">
                    <h1 className="text-[var(--foreground)] text-3xl md:text-4xl">
                        Featured Projects
                    </h1>
                    <p className="text-lg md:text-2xl text-[var(--paragraph-secondary)]">
                        Some of the latest and greatest projects from us here at Wishbone+Partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
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
            </ContentWrap>
        </section>
    )
}
