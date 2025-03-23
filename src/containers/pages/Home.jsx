import Layout from "../../hocs/layouts/Layout";
import Navbar from "../../components/navegation/Navbar";
import Footer from "../../components/navegation/Footer";

function Home() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <h1>Home</h1>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home;
