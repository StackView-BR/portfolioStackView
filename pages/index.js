import Header from '../src/components/inout/header';
import Footer from '../src/components/inout/footer';
import Front from '../src/components/startfront/front';
import View from '../src/components/view/view';
import First from '../src/components/view/first';


function Home(){
    const data1 = {
        tag: "Development",
        title1: "Desenvolvimento com",
        title2: "o melhor desempenho, UI/UX Design",
        desc: <>Desenvolvemos utilizando os frameworks e/ou linguagens que entregam o <strong>máximo desempenho</strong> e permitem uma melhor customização pensando na <strong>usuabilidade e experiencia do usuario</strong>, dentro dos prazos estipulados.
         <br/>Seja no <strong>desenvolvimento web, mobile ou programas para os diferentes sistemas</strong>, nos preocupamos em entregar o melhor para você ou sua empresa.</> ,
        more: "",
    }
    const data2 = {
        tag: "Data Management",
        title1: "Soluções para",
        title2: "gestão de dados e gerenciamento na nuvem",
        desc: <></> ,
        more: "",
    }

    const data3 = {
        tag: "Engineering",
        title1: "Soluções em",
        title2: "automação de processos, manutenção e produtividade",
        desc: <><strong></strong></> ,
        more: "",
    }


    return <div>
        
        <Header />
        <Front/>
        <First/>
        <View data={data1} order="1" order2="2" color3="white" color1="white" color2="#ff6600" color="linear-gradient( 45deg,  #0d2f46 30%, #003153 100%)" />
        <View data={data2} order="2" order2="1" color3="white" color1="white" color2="#003153" color="linear-gradient( 45deg,  #FF6600 30%, #F16436 100%)" />
        <View data={data3} order="1" order2="2" color3="black" color1="#003153" color2="#ff6600" color="linear-gradient( 45deg,  #cccccc 30%, #ffffff 100%)" />
        <div className="stackdesc" style={{height: "70px", width:"100%", backgroundColor:"grey"}}></div>

        <Footer/>
        </div>
}

export default Home