import Layout from "../../hocs/layouts/Layout";
import Navbar from "../../components/navegation/Navbar";
import Footer from "../../components/navegation/Footer";
import Header from "../../components/Home/Header";
import Iniciatives from "../../components/Home/Iniciatives";
import CasesList from "../../components/Home/CasesList";

function Home() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-26">
                <Header/>
                <Iniciatives/>
                <CasesList />
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home;
