const AllItems = (props) => {

var items = props.items.map((item) => {
  return(
    <div key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
})

return(
    <div>
      {items}
    </div>
  )
}