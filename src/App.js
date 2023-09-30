import React from 'react';

class App extends React.Component {
  state = {
    fullName: 'John Doe',
    bio: 'A brief description of John Doe.',
    imgSrc: 'image-url.jpg',
    profession: 'Software Engineer',
    show: false,
  };
}
  
  render() {
    const {fullName, bio, imgSrc, profession, show} = this.state;

    return (
      
      {show && (

        {fullName}
        {bio}
        {profession}
      ) }
    );
  } 


  componentDidMount() {
    this.intervalId = setInterval(() => {
      const timeInterval = Date.now() - this.mountTime;
    this.setState({ timeInterval });
    }, 1000);

  this.mountTime = Date.now();
}

state = {
  timeInterval: 0,
};
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { fullName, bio, imgSrc, profession, show, timeInterval } = this.state;
  
    return (
      
        
        {show && (
          {fullName}
          {bio}
          {profession}

        )}
    )
  }  

export default App;
