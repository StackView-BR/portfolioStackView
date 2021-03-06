import Image from 'next/image'

function Front() {

    return <div className="front">
        <div className="icon">
        
            <img
            id="back"
            src="/nodisk.png"
            width="auto"
        /><div className="front"><img
                id="f"
                src="/disk.png"
                width="auto"
                
            /></div>
            </div>
        <div className="stack">
            <div className="sv s"> St <div className="o"> a </div>ck</div>
            <div className="sv v"><div className="b">V</div>iew</div>
        </div>
        
        <div className="fdd">
            <div className="f"><a>full stack</a></div>
            <div className="d"><a>design</a></div>
            <div className="m" ><a>data management</a></div>
        </div>
    </div>


}

export default Front