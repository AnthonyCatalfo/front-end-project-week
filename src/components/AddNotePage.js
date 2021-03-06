import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import {Button} from "react-bootstrap";

class AddNotePage extends React.Component {

  state = {
    title: '',
    message: ''
  };
// I am using Reacts State for tempory storage throughout this app
  setTitle = (event) => {
    this.setState({title: event.target.value});
  };

  setMessage = (event) => {
    this.setState({message: event.target.value});
  };

  saveNote = event => {
    this.props.actions.saveNoteInStore({
      title: this.state.title,
      message: this.state.message
    });

    // note saved, now let's empty the inputs
    this.setState({
      title: '',
      message: ''
    });
    this.props.history.push('/');
    event.preventDefault(); 
  };
// this prevents the app from resetting the page and losing all our data or state
  render() {
    return (
      <form onSubmit={this.saveNote}>
        <h4>Create New Note</h4>
        <div className="row" style={{marginTop: "40px"}}>
          <div className="col-md-5">
            <input
              type="text"
              value={this.state.title}
              style={{width: "100%"}}
              placeholder="Note Title"
              onChange={this.setTitle}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" style={{marginTop: "15px"}}>
            <textarea
              value={this.state.message}
              style={{width: "100%"}}
              rows={5}
              placeholder="Note Message"
              required
              onChange={this.setMessage}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" style={{marginTop: "15px"}}>
            <Button type="submit">
              Save note
            </Button>
          </div>
        </div>
      </form>
    );
  }
}


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage);