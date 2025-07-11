export default function HeadSubButton({head, sub_head, button}) {
    return <div className="head-sub-button">
        <div className="head">{head}</div>
        <div className="sub-heading">{sub_head}</div>
        <button className="btn bg-lg">{button}</button>
    </div>
}