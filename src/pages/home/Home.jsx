
import Layout from '../../components/layout/Layout'
import Navbar from '../../components/navbar/Navbar';
import NassCatch from '../../components/nassSection/NassCatch';
import HomePageProductCard from '../../components/homepageProductCard/HomePageProductCard';
import Track from './../../components/track/Track';
import Testimonial from '../../components/testimonial/testimonial';
import Loader from '../../components/loader/loader';
import Category from '../../components/category/Category';






const HomePage = () => {
    
    return ( 
        <div>
            <Layout>
                <NassCatch />
                <Category />
                <HomePageProductCard/>
                <Track />
                <Testimonial/>
                <Loader />
            </Layout>
        </div>
     );
}
 
export default HomePage;