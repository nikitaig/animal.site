function Slide(props) {
  return (
    <div className={props.css_class}>  
    <h2 className='text-center iij'>{props.data.kind}</h2>
    <p className='text-center'>{props.data.description}</p>  
    <img src={'https://pets.сделай.site'+props.data.image} className="d-block m-auto" alt="photo_pets" style={{height: '300px'}}/>    
  </div>
  )
}

export default Slide;