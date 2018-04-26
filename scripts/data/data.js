'use strict';

const  DATA = (function() {
  
  let data = {
    API_KEY: 'AIzaSyA68gYnpN0ykW1n-V5ZmRZ0CyUR4EJA2zM',
    END_POINT: 'https://www.googleapis.com/youtube/v3/search',
    videos: [],
  };

  const API_KEY = data.API_KEY;
  const END_POINT = data.END_POINT;
  const videos = data.videos;

  return {
    API_KEY,
    END_POINT,
    videos,
  };
}());