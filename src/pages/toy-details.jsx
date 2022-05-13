import {Component} from "react";
import { toyService } from "../services/toy.service.js";

export class ToyDetails extends Component {
    state = {
        toy: null,
        relativeTime: ''
    }

    componentDidMount() {
        const { toyId } = this.props.match.params
        toyService.getById(toyId)
            .then((toy) => this.setState({ toy, relativeTime: this.relativeHours(toy.createdAt) }))
    }


    relativeHours(timestamp) {
        const rtf = new Intl.RelativeTimeFormat('en', {
            numeric: 'auto',
        });
        const oneHourInMs = 1000 * 60 * 60
        const hourDifference = Math.round(
            (timestamp - new Date().getTime()) / oneHourInMs,
        );

        return rtf.format(hourDifference, 'hour');
    }


    render() {
        const { toy, relativeTime } = this.state
        console.log(toy);
        if (!toy) return <h1>Loading...</h1>
        return <section className="toy-details">
            <h1>Toy Details</h1>
            <ul>
                <li>Toy name: {toy.name}</li>
                <li>Toy price: {toy.price}</li>
                <li>In stock: {toy.inStock ? 'yes': 'no'}</li>
                <li>Toy categories: {toy.labels.join(', ')}</li>
                <li>posted: {relativeTime}</li>
                <li>Toy id: {toy._id}</li>
            </ul>
        </section>
    }
}