var points = ["Technical talks by experts in security, devops, and cloud", "Training sessions for hands on learning in top security areas", "Keynotes from industry leaders", "Vendor booths to promote the latest advances in security technology", "A variety of other activities such as capture the flag, security tool training, and more"];

export default function WhatHappen() {
    return <div className="about-owasp">
        <div className="right"></div>
        <div className="left">
            <div className="head">What Happens at a OWASP BeNeLux Days Conference?</div>
            <div className="sub-heading">
                Never been to an OWASP BeNeLux Days Conference?
                <br />
                Here’s a bit of info to provide some background.
                <br />
                <br />
                {
                    points.map((point)=>{
                        return <li>{point}</li>
                    })
                }
            </div>
            <button className="btn bg-lg">Read More</button>
        </div>
    </div>
}