import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";
import {FooterLinksData} from "@/data/FooterLinksData";
import Link from "next/link";

export const Footer = () => {
    return (
        <section className="p-8 md:py-10 lg:py-15 lg:px-32
        flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
            <div className="flex flex-col items-start justify-center gap-5">
                <div className="">
                    <Image
                        src={resolveAsset('logos', 'wishbone-logo.svg')}
                        alt={'Footer Logo'}
                        width={256} height={22}
                    />
                </div>
                <div className="text-sm text-[var(--paragraph-secondary)]">
                    <p>Powered by Webflow.</p>
                    <p>All rights reserved Wishbone+Partners, Inc. Licensing.</p>
                    <p>Next.js adaptation by <a
                            href="https://github.com/imflawlezz"
                            className="underline hover:text-[var(--foreground)] transition-all duration-200"
                        >
                            imflawlezz
                        </a>
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-5">
                {FooterLinksData.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <Image
                            src={link.imageURL}
                            alt={link.name}
                            width={24}
                            height={24}
                            className="aspect-square hover:scale-125 transition-transform duration-200"
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}