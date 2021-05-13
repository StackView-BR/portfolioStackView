import Link from 'next/link';

function Footer() {

    return <div className="footer">
        <div className="foot"><div className="contact">
            <div className="suma logo"><img
                src="viewicons/logo.png"
                width="auto"
                alt="stackview"
            /></div>

            <address className="endereco">
                <article className="contato">
                    <p>
                        <a href="tel:+5517988309968">
                            Phone: <br /> +5517988309968
                        </a>
                        <br/><br/>
                        <a href="mailto:contact@stackview.com.br">
                            Email: <br />contact@stackview.com.br
                        </a>
                    </p>
                </article>
            Address:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil

            </address>

            <div className="card"> <div className="social">
                <div className="w">
                    <Link href="https://api.whatsapp.com/send?phone=5517988309968">
                        <a> <img
                            href="https://api.whatsapp.com/send?phone=5517988309968"
                            id="w"
                            alt="whatsapp"
                            src="/icons/whats.png"
                            width="50px"
                            height="50px"

                        />
                        </a>
                    </Link>

                    <Link href="https://t.me/stackviewbr">
                        <a className="t"><img
                            id="t"
                            alt="telegram"
                            src="/icons/tel.png"
                            width="50px"
                            height="50px"

                        />
                        </a></Link>

                </div></div>                
            </div>

        </div>
            <div className="follow">
                <span className="sv" style={{fontSize:"x-large"}}>FOLLOW US</span>
                <div className="line">
                    <Link href="https://www.behance.net/StackView"><a><img
                        id="be"
                        alt="behance"
                        src="/icons/behance.png"
                        width="50px"
                        height="50px"
                        style={{background:"#0057FF"}}

                    /></a></Link>
                    <Link href="https://www.instagram.com/g_lisbao/"><a><img
                        id="insta"
                        alt="instagram"
                        src="/icons/insta.png"
                        width="50px"
                        height="50px"
                        style={{background:"#D7407F"}}

                    /></a></Link>
                    <Link href="https://github.com/StackView-BR"><a><img
                        id="git"
                        alt="github"
                        src="/icons/git.png"
                        width="50px"
                        height="50px"
                        style={{background:"#161B22"}}

                    /></a></Link>
                    <Link href="https://www.facebook.com/lisbao.gabriel/"><a><img
                        id="face"
                        alt="facebook"
                        src="/icons/face.png"
                        width="50px"
                        height="50px"
                        style={{background:"#0B84EE"}}

                    /></a></Link>
                    <Link href="https://www.linkedin.com/in/gabrielelisbao/"><a><img
                        id="in"
                        alt="linkedin"
                        src="/icons/in.png"
                        width="50px"
                        height="50px"
                        style={{background:"#0A66C2"}}

                    /></a></Link>
                </div>

            </div></div>

        <div className="rodape">
            <div className="made">&copy;2021+ Stackview BR | All right reserved.</div>
            <div className="made" style={{fontSize:"x-large"}}><span className="custom">made by </span><a href="#" className="stack"> Stack</a><a href="#" className="view esse aki">View</a></div>
        </div>
    </div>


}

export default Footer