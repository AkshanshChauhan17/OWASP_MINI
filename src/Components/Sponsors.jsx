export default function Sponsors() {
    const imgs = new Array(9);
    return <div className="sponsors">
        <div className="head">OUR SPONSORS</div>
        <div className="images">
            {
                [...imgs].map((x, i)=>{
                    return <div key={i} className="img" style={{backgroundImage: `url(./src/assets/sp${i+1}.png)`}}></div>
                })
            }
        </div>
    </div>
}