import Navbar from "../../components/navegation/Navbar";
import Footer from "../../components/navegation/Footer";
import Layout from "../../hocs/layouts/Layout";
import PostHeader from "../../components/Blog/PostHeader"


const Blog = () => {
    return (
        <Layout>
            <Navbar />
            <div className="pt-26">
                <PostHeader />
            </div>
            <Footer/>
        </Layout>
    )
}

export default Blog;
