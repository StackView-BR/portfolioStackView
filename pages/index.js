import Header from '../src/components/HeaderFooter/header';
import Footer from '../src/components/HeaderFooter/footer';
import Front from '../src/components/FrontInicial/front';
import Clients from '../src/components/TrustedBy/clients';
import Devs from '../src/components/Devs/devs';
import ThreeHost from '../src/threeHost/threeHost';
import ScrollUp from '../src/components/ScrollUp/scroll';
import Loader from '../src/components/Loader/loader';

function Home() {
    return <div>
        <Loader/>
        <div className="threeHost">
            <ThreeHost />
        </div>
        <Header />
        <ScrollUp />
        
        <Front />
        <Devs />
        <Clients />
        <Footer />
    </div>
}

export default Home