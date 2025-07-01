'use client';
import {LinkComponent} from "@/components/shared/LinkComponent";

export const GetInTouch = () => {
    return (
        <section className="w-full bg-[var(--background-touch)]
        lg:px-32 p-8 lg:py-24 md:py-12
        flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="">
                <h2 className="text-sm uppercase leading-tight text-[var(--paragraph-secondary)]">
                    Get In Touch
                </h2>

                <h1
                    className="text-4xl md:max-w-lg"
                >
                    Think we would be a good fit for your next project?
                </h1>
            </div>
            <LinkComponent label={"Get in touch"}/>
        </section>
    )
}