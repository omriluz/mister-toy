import { Link } from "react-router-dom";
export function ToyPreview({ toy }) {
    return (<div className="toy-preview">
        <h1>{toy.name}</h1>
        <h2>price: {toy.price}</h2>
        <Link to={`/toys/edit/${toy._id}`}><button>edit</button></Link>
    </div>);
}
