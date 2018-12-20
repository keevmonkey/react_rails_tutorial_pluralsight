class Body extends React.Component {

constructor(props){
  super(props);
  this.state = {
    fruits: [],
    items: []
  };

  this.handleFormSubmit = this.handleFormSubmit.bind(this)
}

handleFormSubmit(name, description){
  let body = JSON.stringify({fruit: {name: name, description: description} })

  fetch('/api/v1/fruits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()
  }).then((fruit) => {this.addNewFruit(fruit)
  })
}

addNewFruit(fruit){
  this.setState({
    fruits: this.state.fruits.concat(fruit)
  })
}

componentDidMount(){
  fetch('/api/v1/fruits.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ fruits: data }) });

  fetch('/api/v1/items.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ items: data }) });
}

render(){
  return(
    <div>
      <NewFruit handleFormSubmit={this.handleFormSubmit}/>
      <AllFruits fruits={this.state.fruits} />
      <hr/>
      <AllItems items={this.state.items} />
    </div>
  )
}

}