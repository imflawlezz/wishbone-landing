import { ReactNode } from "react";

type ContentWrapProps = {
    children: ReactNode;
    className?: string;
};

export const ContentWrap = ({ children, className = "" }: ContentWrapProps) => {
    return (
        <div className={`w-full max-w-[100rem] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 ${className}`}>
            {children}
        </div>
    );
};
