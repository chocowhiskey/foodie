import axios from 'axios';


export default axios.create({
    // insert base url here from yelp to get whatever you are searching for
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SxRHEyhxAGANjOIUqI3gS1t3RiJq-Y7nT5IyZJiYxUIxzXVjD9ZiXEVuLLqf8gAf7-wIWFT4yYkx6aST2_gmtv74iXArYkgY8Tao76HkUOkRK8FMQzAalHGRtB8GXnYx'
    }
});