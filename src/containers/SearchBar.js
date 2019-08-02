import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchWeather} from "../actions"

 class SearchBar extends Component {
    state={
        term:""
    }
    onFormSubmit=e=>{
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({
            term:""
        })
    }
    render() {
        return (
            <React.Fragment>
           <form onSubmit={this.onFormSubmit} className="input-group">
             <input className="mt-2 form-control" value={this.state.term} onChange={e=>this.setState({
                 term:e.target.value
             })} placeholder="Get a city or country"/>
             <span className="input-group-btn">
                 <button type="submit" className="btn btn-secondary">
                     Search
                 </button>
             </span>
           </form>
           </React.Fragment>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)


