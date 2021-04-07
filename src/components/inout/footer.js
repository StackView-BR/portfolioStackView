import Link from 'next/link';

function Footer() {

    return <div className="footer">
        <div className="foot"><div className="contact">
            <div className="suma logo"><img
                src="/logo.png"
                width="auto"
                alt="stackview"
            /></div>

            <div className="card"> <div className="social"><div>< a href="#">Phone</a>: <br /> +5517988309968 </div><div className="w">< a href="#">
                
            <Link href="https://api.whatsapp.com/send?phone=5517988309968"><img
                href="https://api.whatsapp.com/send?phone=5517988309968"
                id="w"
                alt="whatsapp"
                src="/icons/whats.png"
                width="auto"
                
            />
            </Link></a>

                <a href="#" className="t"><Link href="https://t.me/stackviewbr"><img
                    id="t"
                    alt="telegram"
                    src="/icons/tel.png"
                    width="auto"

                /></Link></a>

                </div></div>
                <br /><br /><br />
                <a href="#">Email</a>: <br />stackviewbr@gmail.com<br /><br />
                <a href="#">Address</a>:  <br />Av. João Naves de Ávila, 2121<br /> Santa Mônica, Uberlândia - MG, 38408-100, Brasil</div>


        </div>
            <div className="follow">
                <a href="#"className="sv">FOLLOW US</a>
                <div className="line">
                    <a href="#"><Link href="https://www.behance.net/StackView"><img
                        id="be"
                        alt="behance"
                        src="/icons/behance.png"
                        width="auto"

                    /></Link></a>
                    <a href="#"><Link href="https://www.instagram.com/g_lisbao/"><img
                        id="insta"
                        alt="instagram"
                        src="/icons/insta.png"
                        width="auto"

                    /></Link></a>
                    <a href="#"><Link href="https://github.com/StackView-BR"><img
                        id="git"
                        alt="github"
                        src="/icons/git.png"
                        width="auto"

                    /></Link></a>
                    <a href="#"><Link href="https://www.facebook.com/lisbao.gabriel/"><img
                        id="face"
                        alt="facebook"
                        src="/icons/face.png"
                        width="auto"

                    /></Link></a>
                    
                    <a href="#"><Link href="https://www.linkedin.com/in/gabrielelisbao/"><img
                        id="in"
                        alt="linkedin"
                        src="/icons/in.png"
                        width="auto"
                        
                    /></Link></a>


                </div>

            </div></div>

        <div className="rodape">
            <div className="made"></div>
            <div className="made"><a href="#">made by </a><a href="#"className="stack"> Stack</a><a href="#"className="view">View</a></div>
        </div>
    </div>


}

export default Footer