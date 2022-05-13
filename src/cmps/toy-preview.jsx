import { Link } from "react-router-dom";

export function ToyPreview({ toy, onRemoveToy }) {
    return (<div className="toy-preview">
        <h1>{toy.name}</h1>
        <h2>price: {toy.price}</h2>
        <Link to={`/toys/edit/${toy._id}`}><button>Edit</button></Link>
        <Link to={`/toys/${toy._id}`}><button>Details</button></Link>
        <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
        <div>
            {toy.labels.join(', ')}
        </div>
    </div>);
}
