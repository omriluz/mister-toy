import Multiselect from 'multiselect-react-dropdown';
import React, { Component } from 'react';


export class ToyFilter extends Component {

    state = {
        searchTerm: ''
    }
    multiselectRef = React.createRef();

    onResetFilters = () => {
        // By calling the belowe method will reset the selected values programatically
        this.multiselectRef.current.resetSelectedValues();
        this.setState({ searchTerm: '' })
        this.props.resetFilters()
    }


    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value }, () => {
            this.props.search(this.state.searchTerm)
        });

    }

    onFilterInStock = ({target}) => {
        this.props.filterInStock(target.value)
    }

    render() {
        return <section className="toy-filter">
                    <input type="text" name="searchTerm" value={this.state.searchTerm}
                        placeholder='search' onChange={(event) => this.handleChange(event)} />
                <Multiselect options={this.props.labels}
                    ref={this.multiselectRef}
                    onKeyPressFn={this.try}
                    onRemove={this.props.onRemove}
                    onSelect={this.props.onSelect}
                    placeholder={"Choose filter"}
                    isObject={false}
                    style={{
                        multiselectContainer: {
                            backgroundColor:'white',
                            width: '100%',
                            display: 'inline-block'
                        }
                    }} />
                <select onChange={(event) => this.onFilterInStock(event)}>
                    <option value="all">all</option>
                    <option value="1">in stock</option>
                    <option value="0">out of stock</option>
                </select>
            <button onClick={() => this.onResetFilters()}>Clear Filters</button>
        </section>
    }
}