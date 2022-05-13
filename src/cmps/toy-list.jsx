import { ToyPreview } from "./toy-preview.jsx";

export function ToyList({ toys, onRemoveToy }) {
    return (
        <div className="toy-list">
            {toys.map(toy => {
                return <ToyPreview key={toy._id} toy={toy} onRemoveToy={onRemoveToy} />
            })}
        </div>);
}

