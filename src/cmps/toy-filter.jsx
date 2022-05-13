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
      this.setState({searchTerm:''})
      this.props.resetFilters()
    }


    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value });
    }

    onSearch = (ev) => {
        ev.preventDefault()
        this.props.search(this.state.searchTerm)
    }

    render() {
        return <section className="toy-filter">
            <form onSubmit={this.onSearch}>
                <input type="text" name="searchTerm" value={this.state.searchTerm}
                    placeholder='search' onChange={(event) => this.handleChange(event)} />
            </form>
            <Multiselect options={this.props.labels}
                ref={this.multiselectRef}
                onRemove={this.props.onRemove}
                onSelect={this.props.onSelect}
                placeholder={"Choose filter"}
                isObject={false} />
            <button onClick={() => this.onResetFilters()}>clear</button>
        </section>
    }
}