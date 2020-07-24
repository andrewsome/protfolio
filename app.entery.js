const galleryData = [{
  title: 'The Weather Forecast',
  description: 'The Weather Forecast, its a progressive web app that let user know the tenperature and weather of current location',
  stacks: ['HTML5', 'CSS3', 'VanillaJS', 'API', 'Npm'],
  img: 'images/weather1.jpg',
  url: 'https://app-weather-simple.herokuapp.com'
},{
  title: 'Event Registration App',
  description: 'Event Registration App, it allow you regist any event for a olympics game by adding event name and descriptions, such as football, basketball,',
  stacks: ['HTML5', 'CSS3', 'VanillaJS', 'Nodejs', 'Express', 'MongoDB', 'Mongoose', 'Npm'],
  img: 'images/eventmaker.jpg',
  url: 'https://demo-mongdb-mongoose.herokuapp.com',
},{
  title: 'AutoComplete Demo',
  description: 'A demo that use throttling and debouncing, to reduce API call times for search engine, in this case is for address search.',
  stacks: ['HTML5', 'CSS3', 'VanillaJS', 'API'],
  img: 'images/autocomplete.jpg',
  url: 'https://autocomplete-demostration.herokuapp.com/'
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ""
    }
  }

  handleThemeDark() {
    this.setState({
      theme: "dark",
    })
  }

  render() {
    return (
      <div className={`projects-gallery ${this.state.theme}`}> 
        {
          galleryData.map((slide, index) => 
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={slide.img} alt={slide.title}/>
              </div>
              <div className="flip-card-back">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <h4>Skills:</h4>
                <div className="skill-stacks">
                {
                  slide.stacks.map((stack, index) => 
                    <p className="stack" key={index}>{stack}</p>
                  )
                }
                </div>
                <a href={slide.url}>Go to site</a>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));