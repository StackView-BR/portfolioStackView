import Header from '../src/components/inout/header';
import Footer from '../src/components/inout/footer';
import Front from '../src/components/startfront/front';
import View from '../src/components/view/view';


function Home(){
    const data = {
        tag: "Engineering",
        title1: "Soluções para",
        title2: "gestão de dados, manutenção e produtividade",
        desc: <>Example <strong>title</strong> fdmvna f efnasçkjfnajksnfdskjmsnjkabsadndkjhab lf jkdnfçkewafjewflçasckdsncçka kldncjasndnsaçoi</> ,
        more: "",
    }

    return <div>
        
        <Header />
        <Front/>
        <div className="stackdesc" style={{height: "70px", width:"100%", backgroundColor:"grey"}}></div>
        <View data={data} order="1" order2="2" color3="white" color1="white" color2="#ff6600" color="linear-gradient( 45deg,  #0d2f46 30%, #003153 100%)" />
        <View data={data} order="2" order2="1" color3="white" color1="white" color2="#003153" color="linear-gradient( 45deg,  #FF6600 30%, #F16436 100%)" />
        <View data={data} order="1" order2="2" color3="black" color1="#003153" color2="#ff6600" color="linear-gradient( 45deg,  #cccccc 30%, #ffffff 100%)" />
        <div className="stackdesc" style={{height: "70px", width:"100%", backgroundColor:"grey"}}></div>

        <Footer/>
        </div>
}

export default Home