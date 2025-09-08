import LinksUnderlineEffect from "@/components/ui/LinksUnderlineEffect";
import { motion } from "framer-motion";

const showData = () => {
  return "need to build a website or app"
}

const data: string[] = [
  "Digital Product Design",
  "Branding & Identity",
  "UX/UI Design",
  "Mobile App Development",
  "Web App Development",
]

const HeroSections = () => {
  return (
    <div className="pt-16">
      <ul className="flex gap-6">
        {data.map((item, index) => (
          <li key={index} className="flex gap-2">
            <LinksUnderlineEffect text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSections;
