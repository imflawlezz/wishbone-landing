import Link from "next/link"
import { LinkComponentProps } from "@/types/LinkComponentProps";

export const LinkComponent = ({
                                  label,
                                  onClick,
                                  href,
                                  className = '',
                                  isButton = false
                              }: LinkComponentProps) => {
    const baseClass = isButton
        ? "inline-block bg-[var(--foreground)] text-white py-2.5 md:py-1.5 lg:py-2.5 px-5 rounded-2xl transition duration-200 hover:bg-[var(--hover)]"
        : "relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--foreground)] after:transition-all after:duration-350 after:delay-50 hover:after:w-full";

    return (
        <div className={`${className} md:text-sm lg:text-base`}>
            <Link
                href={`/${href}`}
                onClick={onClick}
                className={baseClass}
            >
                {label}
            </Link>
        </div>
    );
};
