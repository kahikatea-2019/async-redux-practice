import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_PLANET = 'RECIEVE_PLANET'
export const REQUEST_PLANET = 'REQUEST_PLANET'

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

export const requestPlanet = () => {
  return {
    type: REQUEST_PLANET
  }
}

export const receivePlanet = (planets) => {
  return {
    type: RECEIVE_PLANET,
    planets: planets
  }
}

export function fetchPlanet () {
  return (dispatch) => {
    dispatch(requestPlanet())
    return request
      .get('https://swapi.co/api/planets')
      .then(res => {
        dispatch(receivePlanet(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
