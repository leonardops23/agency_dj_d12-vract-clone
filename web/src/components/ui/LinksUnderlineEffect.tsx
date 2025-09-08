const LinksUnderlineEffect = ({text}: {text: string}) => {
    return (
        <div className="group cursor-pointer">
            <a href="#" className="text-sm font-medium">{text}</a>
            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
    )
}

export default LinksUnderlineEffect