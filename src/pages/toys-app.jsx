import { Component } from 'react'
//try removing component see if you need it
import { connect } from "react-redux";
import { ToyList } from '../cmps/toy-list.jsx';
import { loadToys } from '../store/actions/toy.action'

class _ToyApp extends Component {

  componentDidMount() {
    this.props.loadToys()
  }


  render() {
    return (
      <div className="toy-app-container">
        <ToyList toys={this.props.toys}/>
      </div>
    )
  }
}



function mapStateToProps(storeState) {
  return {
    count: storeState.countModule.count,
    status: storeState.statusModule.status,
    toys: storeState.toyModule.toys
  }
}
const mapDispatchToProps = {
  loadToys
}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)