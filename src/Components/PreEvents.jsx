var events = new Array(5);

export default function PreEvents() {
    return <div className="pre-events">
        <div className="head">PREVIOUS BENELUX DAYS</div>
        <div className="events">
            {
                [...events].map((e, i)=>{
                    return <div className="event" key={i}>
                        <div className="image" style={{backgroundImage: `url(/src/assets/img${i + 1}.jpg)`}}></div>
                        <div className="year">{2024 - i}</div>
                        <div className="text">Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.</div>
                        <button className="btn bg-lg">Read More</button>
                    </div>
                })
            }
        </div>
    </div>
}