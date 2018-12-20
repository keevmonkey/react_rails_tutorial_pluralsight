class Fruit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/> : <h3>{this.props.fruit.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/> : <p>{this.props.fruit.description}</p>
    return(
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
      </div>
    )
  }
}