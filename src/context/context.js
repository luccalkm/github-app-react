import React, { useState, createContext, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext()
// Gives the Provider & Consumer

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  // Check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { rate } = data
        setRequest(rate.remaining)
        if (rate.remaining === 0) {
          // throw an error
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Request Loading
  const [request, setRequest] = useState(0)
  const [loading, setLoading] = useState(false)

  // Error
  useEffect(checkRequests, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
