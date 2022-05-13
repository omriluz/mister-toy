import { Component } from 'react'
//try removing component see if you need it
import { connect } from "react-redux";
import { ToyList } from '../cmps/toy-list.jsx';
import { ToyFilter } from '../cmps/toy-filter.jsx';
import { loadToys, removeToy, addToy } from '../store/actions/toy.action'
import { ToyPreview } from '../cmps/toy-preview.jsx';


class _ToyApp extends Component {

  state = {
    toysForDisplay: null,
    labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]
  }

  componentDidMount() {
    this.props.loadToys()
  }

  onRemoveToy = (toyId) => {
    this.props.removeToy(toyId)
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
    const toysForDisplay = this.props.toys.filter(toy => {
      const found = toy.labels.some(label => selectedList.indexOf(label) >= 0)
      if (found) return toy
    })
    this.setState({ toysForDisplay })
  }


  onRemove = (selectedList) => {
    const toysForDisplay = this.props.toys.filter(toy => {
      const found = toy.labels.some(label => selectedList.indexOf(label) >= 0)
      if (found) return toy
    })
    toysForDisplay.length ? this.setState({ toysForDisplay }) :
    this.setState({ toysForDisplay:null })
  }

  get toysToDisplay() {
    return this.state.toysForDisplay || this.props.toys
  }


  render() {
    const { labels } = this.state
    return (
      <div className="toy-app-container">
        <button onClick={this.onAddToy}>Add toy</button>
        <ToyFilter onSelect={this.onSelect} onRemove={this.onRemove} labels={labels} onUpdateFilter={this.onUpdateFilter} />
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