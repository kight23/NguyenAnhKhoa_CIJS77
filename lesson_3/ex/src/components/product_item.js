import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faAdd, faShare } from '@fortawesome/free-solid-svg-icons';

function ProductsItem(props) {
    return (

        <div className="product-card">
            <img src={props.img} alt={props.alt} />
            <div className='product-card-des'>
                <div className="name">{props.name}</div>
                <div className="desc">{props.desc}</div>
            </div>
        </div>
    )
}

export default ProductsItem;