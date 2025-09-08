import Link from "next/link";

interface ButtonLinkProps {
    text: string;
    href: string;
}

const ButtonLink = ({ text, href }: ButtonLinkProps) => {
    return (
        <Link
            href={href}
            className="items-center cursor-pointer hover:bg-[#25B7B0] hover:text-white bg-[#25B7B0] text-white px-4 py-2 rounded-xs text-sm font-medium">
            {text}
        </Link>
    )
}

export default ButtonLink;
