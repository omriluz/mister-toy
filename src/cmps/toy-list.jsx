import { ToyPreview } from "./toy-preview.jsx";

export function ToyList({ toys, onRemoveToy }) {
    if (!toys.length) return <h1>No toys were found</h1>
    return (
        <div className="toy-list">
            {toys.map(toy => {
                return <ToyPreview key={toy._id} toy={toy} onRemoveToy={onRemoveToy} />
            })}
        </div>);
}

