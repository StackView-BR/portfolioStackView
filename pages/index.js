import Header from '../src/components/HeaderFooter/header';
import Footer from '../src/components/HeaderFooter/footer';
import Front from '../src/components/FrontInicial/front';
import Clients from '../src/components/view/clients';
import About from '../src/components/view/about';
import Devs from '../src/components/view/devs';
import Portfolio from '../src/components/view/portfolio';

import ThreeHost from '../src/threeHost/threeHost';

function Home() {
    return <div>
        <Header />
        <ThreeHost />
        <Front />
        <About/>
        <Devs/>
        <Portfolio/>
        <Clients />
        <Footer />
    </div>
}

export default Home