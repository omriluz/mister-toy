import { Component } from "react";
import { toyService } from "../services/toy.service.js";
import { connect } from "react-redux";
import { save } from '../store/actions/toy.action'



export class _ToyEdit extends Component {
    state = {
        toy: null,
        name: '',
        isProcessing :false
    }


    componentDidMount() {
        const { toyId } = this.props.match.params
        toyService.getById(toyId)
            .then(toy => {
                this.setState({ toy })
            })

    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value });
    }

    onSave = (ev) => {
        ev.preventDefault()
        this.setState({isProcessing:true}) 
        this.props.save(this.state)
            .then(() => this.props.history.push('/toys'))
    }

    render() {
        const { toy, name, isProcessing } = this.state
        return <>
            {toy?.name ? <> <h1>Change the name of this toy: {toy.name}</h1>
                <form onSubmit={(event) => this.onSave(event)}>
                    <input type="text" name="name" value={name} onChange={(event) => this.handleChange(event)} /></form>
                {isProcessing && <p>Processing...</p>}
            </>
                : <h1>Loading..</h1>}
        </>
    }
}


function mapStateToProps(storeState) {
    return {}
}

const mapDispatchToProps = {
    save
}

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)