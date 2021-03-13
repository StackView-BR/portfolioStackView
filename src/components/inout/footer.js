import Link from 'next/link';

function Footer() {

    return <div className="footer">
        <div className="foot"><div className="contact">
            <div className="suma logo"><img
                src="/logo.png"
                width="auto"
            /></div>

            <div className="card"> <div className="social"><div><a>Phone</a>: <br /> +5517988309968 </div><div className="w"><a >
                
            <Link href="https://api.whatsapp.com/send?phone=5517988309968"><img
                href="https://api.whatsapp.com/send?phone=5517988309968"
                id="w"
                src="/icons/whats.png"
                width="auto"
                
            />
            </Link></a>

                <a className="t"><Link href="https://t.me/stackviewbr"><img
                    id="t"
                    src="/icons/tel.png"
                    width="auto"

                /></Link></a>

                </div></div>
                <br /><br /><br />
                <a>Email</a>: <br />stackviewbr@gmail.com<br /><br />
                <a>Address</a>:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil</div>


        </div>
            <div className="follow">
                <a className="sv">FOLLOW US</a>
                <div className="line">
                    <a ><Link href="https://www.behance.net/StackView"><img
                        id="be"
                        src="/icons/behance.png"
                        width="auto"

                    /></Link></a>
                    <a><Link href="https://www.instagram.com/g_lisbao/"><img
                        id="insta"
                        src="/icons/insta.png"
                        width="auto"

                    /></Link></a>
                    <a><Link href="https://github.com/StackView-BR"><img
                        id="git"
                        src="/icons/git.png"
                        width="auto"

                    /></Link></a>
                    <a><Link href="https://www.facebook.com/lisbao.gabriel/"><img
                        id="face"
                        src="/icons/face.png"
                        width="auto"

                    /></Link></a>
                    
                    <a><Link href="https://www.linkedin.com/in/gabrielelisbao/"><img
                        id="in"
                        src="/icons/in.png"
                        width="auto"

                    /></Link></a>


                </div>

            </div></div>

        <div className="rodape">
            <div className="made"><a></a></div>
            <div className="made"><a>made by </a><a className="stack"> Stack</a><a className="view">View</a></div>
        </div>
    </div>


}

export default Footer