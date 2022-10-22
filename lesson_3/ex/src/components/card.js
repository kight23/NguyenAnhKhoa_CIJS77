import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faAdd,faShare } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
    return (
        <div className="container">
            <div className="card">
            <div className='card-count'>{props.count} - </div>
                <img src={props.img} alt={props.alt} />
                <div className='card-des'>
                    <div className="name">{props.name}</div>
                    <div className="desc">{props.desc}</div>
                </div>
                <div className="card-actions">
                    <div className="download"><FontAwesomeIcon icon={faDownload} /></div>
                    <div className="add"><FontAwesomeIcon icon={faAdd} /></div>
                    <div className="share"><FontAwesomeIcon icon={faShare} /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;