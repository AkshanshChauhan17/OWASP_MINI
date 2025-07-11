import BGText from "../Components/BGText";
import FAQ from "../Components/FAQ";
import HeroMini from "../Components/HeroMini";
import IconTitleContent from "../Components/IconTitleContent";
import Sponsors from "../Components/Sponsors";

export default function SponsorPage() {
    return <div className="sponsors-page">
        <HeroMini title={"SPONSORS"} />
        <IconTitleContent icon={false} title={"Sponsorship packages"} content={"There are 3 combined sponsorship packages (Gold, Silver or Bronze) that cover the BeNeLux chapter meetings 2022 and the BeNeLux OWASP Days 2022. Download our sponsor brochure and contact us seba@owasp.org for questions or sponsorship confirmation! Your sponsorship will be invested directly in the chapter meetings, supporting speaker and catering expenses. The sponsorship will also be dedicated to cover the costs of the OWASP 2022 BeNeLux event."} />
        <Sponsors only_icons={true} />
        <BGText title={"Become a sponsor of OWASP BeNeLux!"} button={"Become a Sponsor"} type={2} />
        <FAQ />
    </div>
}