import React, { Component } from 'react';
import ViewerTemplate from "./components/ViewerTemplate";
import SpaceNavigator from "./components/SpaceNavigator";
import Viewer from "./components/Viewer";
import moment from 'moment';
import * as api from './lib/api';


class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if(this.state.loading) return; //이미 요청중
    this.setState({
      loading: true
    });

    try{
      const response = await api.getAPOD(date);
      const { date: retrievedDate, url, media_type: mediaType} = response.data;

      if(!this.state.maxDate){
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

      // api.getAPOD(date).then((response) => {
      //   console.log(response);
      // });
    }catch(e){
      console.log(e);
    }

    this.setState({
      loading: false
    })
  };

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  };

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log(nextDate);
    this.getAPOD(nextDate);
  };

  componentDidMount() {
    this.getAPOD();
  };
  render(){
    const {url, mediaType, loading } = this.state;
    const { handlePrev, handleNext} = this;
    return (
      <ViewerTemplate 
        spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>}
        viewer={(
          <Viewer
            url={url}
            //url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg" 
            //url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0" 
            mediaType={mediaType}
            loading={loading}/>
        )}
      />
    );
      
  }
}

export default App;
