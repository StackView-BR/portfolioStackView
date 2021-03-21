import Header from '../../src/components/inout/header';
import Footer from '../../src/components/inout/footer';



function We(){

    return <div>
        
        <Header />
        
        <div className="stackdesc" style={{height: "100vh", width:"100%", backgroundColor:"black"}}>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="pt_BR" data-type="horizontal" data-theme="dark" data-vanity="gabrielelisbao"><a class="LI-simple-link" href='https://br.linkedin.com/in/gabrielelisbao?trk=profile-badge'>Gabriel Elisbao</a></div>
        </div>

        <Footer/>
        </div>
}

export default We