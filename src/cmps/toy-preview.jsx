import { Link } from "react-router-dom";

export function ToyPreview({ toy, onRemoveToy }) {
    return (<div className="toy-preview">
        <h1 className="toy-preview-title" >{toy.name}</h1>
        <h2 className="toy-price">{toy.price}</h2>
        <div className="button-container">
        <Link to={`/toys/edit/${toy._id}`}><button className="edit-btn"> Edit</button></Link>
        <Link to={`/toys/${toy._id}`}><button className="details-btn" > Details</button></Link>
        <button onClick={() => onRemoveToy(toy._id)} className="delete-btn"> Delete</button>
        </div>
        <div>
            {toy.labels.join(', ')}
        </div>
    </div>);
}
