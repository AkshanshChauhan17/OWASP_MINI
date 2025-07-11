var faqs = [
    {
        q: "",
        a: ""
    },{
        q: "",
        a: ""
    },{
        q: "",
        a: ""
    },{
        q: "",
        a: ""
    },{
        q: "",
        a: ""
    },{
        q: "",
        a: ""
    }
]

export default function FAQ() {
    return <div className="faq">
        <div className="head">FREQUENTLY ASK QUESTIONS</div>
        <div className="section">
            <div className="left">
                {
                    faqs.map((e, i)=>{
                        return <div className="faq-single"><div className="l-icon">+</div>How long until we deliver your first blog post?<div className="r-icon">+</div></div>
                    })
                }
            </div>
            <div className="right">
                <div className="icon">?</div>
                <div className="r-head">ANY QUESTION?</div>
                <div className="r-sub">You can ask anything you want to know Feedback</div>
                <div className="input-ar">
                    <div className="ia-title">Let me know</div>
                    <input type="text" max={200} />
                </div>
            </div>
        </div>
    </div>
}