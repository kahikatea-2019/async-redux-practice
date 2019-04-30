import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_STARWARS = 'RECIEVE_STARWARS'
export const REQUEST_STARWARS = 'REQUEST_STARWARS'

// const gotUrl = 'https://anapioficeandfire.com/api/houses/378'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestStarWars = () => {
  return {
    type: REQUEST_STARWARS
  }
}

export const recieveStarWars = (starWarsData) => {
  return {
    type: RECEIVE_STARWARS,
    starWarsData: starWarsData
  }
}

export function fetchStarWars () {
  return (dispatch) => {
    dispatch(requestStarWars())
    return request
      .get('https://swapi.co/api/people/3')
      .then(res => {
        dispatch(recieveStarWars(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
} 