import Multiselect from 'multiselect-react-dropdown';
import { Component } from 'react';


export class ToyFilter extends Component {

    render() {
        return <section className="toy-filter">
            <input type="text" placeholder='search' />
            <Multiselect options={this.props.labels}
                onRemove={this.props.onRemove}
                onSelect={this.props.onSelect}
                placeholder={"Choose filter"}
                isObject={false} />
        </section>
    }
}