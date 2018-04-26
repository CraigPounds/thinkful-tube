'use strict';

const  DATA = (function() {
  
  let data = {
    apiKey: 'AIzaSyA68gYnpN0ykW1n-V5ZmRZ0CyUR4EJA2zM',
    endPoint: 'https://www.googleapis.com/youtube/v3/search',
    videos: [],
  };

  const apiKey = data.apiKey;
  const endPoint = data.endPoint;
  const videos = data.videos;

  return {
    apiKey,
    endPoint,
    videos,
  };
}());