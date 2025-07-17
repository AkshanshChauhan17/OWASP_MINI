import { useState } from "react";

const faqs = [
    {
        q: "What is OWASP?",
        a: "OWASP (Open Worldwide Application Security Project) is a non-profit organization focused on improving the security of software through community-led open-source projects, tools, and education."
    },{
        q: "What is the OWASP Top 10?",
        a: "The OWASP Top 10 is a regularly updated list of the ten most critical web application security risks, serving as a guide for developers and organizations to build secure applications."
    },{
        q: "How can developers use OWASP resources?",
        a: "Developers can use OWASP tools like ZAP, checklists, the Top 10 guide, and secure coding practices provided in OWASP documentation to write more secure code."
    },{
        q: "Is OWASP only for developers?",
        a: "No, OWASP provides resources for developers, testers, security professionals, and business leaders to improve application security across all levels of an organization."
    },{
        q: "Where can I access OWASP projects?",
        a: "OWASP projects can be accessed for free on their official website at https://owasp.org, where users can find tools, documentation, and community initiatives."
    }
];

export default function FAQ() {
    const [openQ, setOpenQ] = useState(0);
    return (
        <div className="faq">
            <div className="head">FREQUENTLY ASKED QUESTIONS</div>
            <div className="section">
                <div className="left">
                    {
                        faqs.map((item, index) => (
                            <div className="faq-section">
                                <div className="faq-single" key={index}>
                                    <div className="l-icon">+</div>
                                    {item.q}
                                    <div className={openQ === index + 1 ? "r-icon open" : "r-icon"} onClick={()=>openQ === index + 1 ? setOpenQ(0) : setOpenQ(index + 1)}>+</div>
                                </div>
                                {openQ === index + 1 && <div className="faq-ans">{item.a}</div>}
                            </div>
                        ))
                    }
                </div>
                <div className="right">
                    <div className="icon">?</div>
                    <div className="r-head">ANY QUESTION?</div>
                    <div className="r-sub">You can ask anything you want to know. Feedback welcome!</div>
                    <div className="input-ar">
                        <div className="ia-title">Let me know</div>
                        <input type="text" maxLength={200} />
                    </div>
                </div>
            </div>
        </div>
    );
}