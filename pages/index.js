import Header from '../src/components/inout/header';
import Footer from '../src/components/inout/footer';
import Front from '../src/components/startfront/front';
import View from '../src/components/view/view';
import First from '../src/components/view/first';
import Clients from '../src/components/view/clients';
import Document, { Html } from 'next/document'



function Home() {
    const data1 = {
        tag: "Development",
        title1: "Desenvolvimento com",
        title2: "o melhor desempenho, UI/UX Design",
        desc: <>Desenvolvemos utilizando os frameworks e/ou linguagens que entregam o <strong>máximo desempenho</strong> e permitem uma melhor customização pensando na <strong>usuabilidade e experiencia do usuario</strong>, dentro dos prazos estipulados.
            <br />Seja no <strong>desenvolvimento web, mobile ou programas para os diferentes sistemas</strong>, nos preocupamos em entregar o melhor para você ou sua empresa.</>,
        more: <><img
            alt="stackview"
            className="above"
            src="viewicons/icon.png"
            width="25%"
            style={{ marginRight: "-5%" }}

        />  </>,
        img: "/views/view1.png",
    }
    const data2 = {
        tag: "Data Management",
        title1: "Soluções para",
        title2: "gestão de dados e gerenciamento na nuvem",
        desc: <>Nossos <strong>softwares</strong> empregam algoritmos e funcionalidades para lidar com grandes <strong>volumes de dados</strong>, permitem o rápido acesso e organização de forma otimizada.
        Utilizamos servidores e estrutura de banco de dados que melhor se adequem ao seu problema, de forma a entregar desempenho com <strong>segurança dos dados</strong>. </>,
        more: <><img
            alt="data disk"
            className="above rotator"
            src="viewicons/disk.png"
            width="auto"

        /></>,
        img: "/views/view2.png",
    }

    const data3 = {
        tag: "Engineering",
        title1: "Soluções em",
        title2: "automação de processos, manutenção e produtividade",
        desc: <>A Indústria 4.0 representa o avanço da transformação digital sobre os pilares produtivos das organizações, modificando por completo a perspectiva operacional, é uma tendência que cresce a cada ano. Nossas soluções impulsionam o desenvolvimento tecnológico, e são a porta de entrada para implementação de modernos sistemas de produção e manutenção.
            <strong></strong></>,
        more: <><a className="above" href="#" ><a href="#" className="stack" style={{ fontSize: "100%" }}>s</a><a href="#" className="view" style={{ fontSize: "100%" }}>v</a></a>  </>,
        img: "/views/view1.png",
    }


    return <div>
        <Header />
        <Front />
        <First />
        <View data={data1} left="-30%" colororange=" linear-gradient( 45deg,  #FF6600 80%, #F16436 100%)" order="1" order2="2" color3="white" color1="white" color2="#ff6600" color="linear-gradient( 45deg,  #0d2f46 30%, #003153 100%)" />
        <View data={data2} left="-30%" colororange=" linear-gradient( 45deg, #003153 70%, #FF6600 70%, #FF6600 100%)" order="2" order2="1" color3="white" color1="white" color2="#003153" color="linear-gradient( 45deg,  #FF6600 30%, #F16436 100%)" />
        <View data={data3} left="-30%" colororange=" linear-gradient( 45deg,  #FF6600 80%, #003153 80%)" order="1" order2="2" color3="black" color1="#003153" color2="#ff6600" color="linear-gradient( 45deg,  #cccccc 30%, #ffffff 100%)" />
        <Clients />

        <Footer />

    </div>
}

export default Home