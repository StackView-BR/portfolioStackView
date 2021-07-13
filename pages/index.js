import Header from '../src/components/inout/header';
import Footer from '../src/components/inout/footer';
import Front from '../src/components/startfront/front';
import Clients from '../src/components/view/clients';
import About from '../src/components/startfront/about';
import Devs from '../src/components/view/devs';
import Portfolio from '../src/components/view/portfolio';

function Home() {
    return <div>
        <Header />
        <Front />
        <About/>
        <Devs/>
        <Portfolio/>
        <Clients />
        <Footer />
    </div>
}

export default Home