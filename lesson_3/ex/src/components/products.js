import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faAdd, faShare } from '@fortawesome/free-solid-svg-icons';
import ProductsItem from './product_item';
import Team1 from '../assets/images/team-1.jpg';
import Team2 from '../assets/images/team-2.jpg';
import Team3 from '../assets/images/team-3.jpg';
import Team4 from '../assets/images/team-4.jpg';
import Team5 from '../assets/images/team-5.jpg';

function Products(props) {
    return (
        <div className="container">
            <div className="products">
                <ProductsItem img={Team1} name="Team1" desc="It Team 1"></ProductsItem>
                <ProductsItem img={Team2} name="Team2" desc="It Team 2"></ProductsItem>
                <ProductsItem img={Team3} name="Team3" desc="It Team 3"></ProductsItem>
                <ProductsItem img={Team4} name="Team4" desc="It Team 4"></ProductsItem>
                <ProductsItem img={Team5} name="Team5" desc="It Team 5"></ProductsItem>
            </div>
        </div>
    )
}

export default Products;