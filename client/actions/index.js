import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_API = 'REQUEST_API'
export const RECEIVE_API = 'RECEIVE_API'

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

export const requestApi = () => {
  return {
    type: REQUEST_API
  }
}

export const receiveApi = (character) => {
  return {
    type: RECEIVE_API,
    character: character
  }
}

export function fetchApi () {
  return (dispatch) => {
    dispatch(requestApi())
    return request.get('https://anapioficeandfire.com/api/characters/583')
      .then(res => {
        dispatch(receiveApi(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
