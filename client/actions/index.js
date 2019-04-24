import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_NASA = 'REQUEST_NASA'
export const RECEIVE_NASA = 'RECEIVE_NASA'

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=6Nb8R14jIbE6u6pBvLTae4L8aQ3fJWXsWexvJnaw'

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

export const requestNasa = () => {
  return {
    type: REQUEST_NASA
  }
}

export const receiveNasa = (nasaData) => {
  return {
    type: RECEIVE_NASA,
    nasaData: nasaData
  }
}

export function fetchNasa () {
  return (dispatch) => {
    dispatch(requestNasa())
    return request
      .get(nasaUrl)
      .then(res => {
        dispatch(receiveNasa(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
