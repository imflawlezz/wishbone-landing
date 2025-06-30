export interface LinkComponentProps {
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
    isButton?: boolean;
}