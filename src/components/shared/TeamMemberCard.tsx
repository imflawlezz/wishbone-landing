import {TeamMemberCardProps} from "@/types/TeamMemberCardProps";
import Image from "next/image";

export const TeamMemberCard = ({
    firstName,
    lastName,
    occupation,
    imageURL,
    className
}:TeamMemberCardProps) => {
    return (
        <div className={`${className} flex flex-row items-center gap-7`}>
            <div className="w-15 h-15 lg:h-20 lg:w-20 relative rounded-full overflow-hidden shadow-lg border-[3px] border-[var(--background-touch)]">
                <Image
                    src={imageURL}
                    alt={`${firstName} ${lastName} profile image`}
                    fill
                    objectFit="cover"
                    className=""
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-[var(--foreground)]">{firstName} {lastName}</p>
                <p className="text-[var(--paragraph-secondary)] text-sm">{occupation}</p>
            </div>
        </div>
    )
}