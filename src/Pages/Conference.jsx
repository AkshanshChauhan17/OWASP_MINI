import ConferenceSchedule from "../Components/ConferenceSchedule";
import ConfirmedSpeakers from "../Components/ConfiremedSpeakers";
import HeroMini from "../Components/HeroMini";

export default function Conference() {
    return <div className="conference">
        <HeroMini title={"Conference"} />
        <ConferenceSchedule />
        <ConfirmedSpeakers />
    </div>
}