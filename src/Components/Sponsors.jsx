export default function Sponsors({only_icons}) {
    const imgs = new Array(9);
    return <div className="sponsors" style={only_icons && {paddingTop: 0}}>
        {!only_icons && <div className="head">OUR SPONSORS</div>}
        <div className="images">
            {
                [...imgs].map((x, i)=>{
                    return <div key={i} className="img" style={{backgroundImage: `url(./sp${i+1}.png)`}}></div>
                })
            }
        </div>
    </div>
}