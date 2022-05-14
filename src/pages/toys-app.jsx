import React, { Component } from 'react'
import { connect } from "react-redux";
import { ToyList } from '../cmps/toy-list.jsx';
import { ToyFilter } from '../cmps/toy-filter.jsx';
import { loadToys, removeToy, addToy } from '../store/actions/toy.action'


class _ToyApp extends Component {

  state = {
    toysForDisplay: null,
    labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"],
    filterBy: {
      txt: '',
      labels: [],
      inStock: 'all'
    }

  }
  componentDidMount() {
    this.props.loadToys(this.state.filterBy)
  }

  onRemoveToy = (toyId) => {
    this.props.removeToy(toyId)
  }

  resetFilters = () => {
    this.setState({
      filterBy: {
        txt: '',
        labels: [],
        inStock: 'all'
      }
    })
  }

  onAddToy = () => {
    const toy = {
      "_id": null,
      "name": prompt('toy name?'),
      "price": +prompt('price?'),
      "labels": ["Doll", "Battery Powered", "Baby"],
      "createdAt": Date.now(),
      "inStock": true
    }
    this.props.addToy(toy)
  }

  onSelect = (selectedList) => {
    this.setState({ filterBy: { ...this.state.filterBy, labels: selectedList } })
  }

  search = (searchTerm) => {
    this.setState({ filterBy: { ...this.state.filterBy, txt: searchTerm } })
  }


  onRemove = (selectedList) => {
    this.setState({ filterBy: { ...this.state.filterBy, labels: selectedList } })
  }

  filterInStock = (val) => {
    this.setState({ filterBy: { ...this.state.filterBy, inStock: val } })
  }


  get toysToDisplay() {
    const { txt, inStock, labels } = this.state.filterBy
    const { toys } = this.props
    let filteredToys = toys.filter(toy => {
      let foundByTxt
      let foundByLabel = []
      let foundByStock

      if (labels.length) {
        foundByLabel = toy.labels.some(label => labels.indexOf(label) >= 0)
      }
      foundByTxt = toy.name.includes(txt)
      foundByStock = inStock === 'all' ? true : toy.inStock == +inStock

      if (foundByStock) {
        if (foundByLabel) {
          if (foundByTxt) {
            return toy
          }
        }
      }
    })

    return filteredToys
  }


  render() {
    console.log(this.state);
    const { labels } = this.state
    return (
      <div className="toy-app-container">
        <button onClick={this.onAddToy}>Add toy</button>
        <ToyFilter onSelect={this.onSelect}
          filterInStock={this.filterInStock}
          resetFilters={this.resetFilters}
          search={this.search}
          onRemove={this.onRemove}
          labels={labels}
          onUpdateFilter={this.onUpdateFilter} />
        <ToyList onRemoveToy={this.onRemoveToy} toys={this.toysToDisplay} />
      </div>
    )
  }
}



function mapStateToProps(storeState) {
  return {
    toys: storeState.toyModule.toys,
  }
}
const mapDispatchToProps = {
  loadToys,
  removeToy,
  addToy
}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)