import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie2D, Column3D, Bar3D, Doughnut3D } from './Charts'
const Repos = () => {
  const { repos } = React.useContext(GithubContext)

  let languagesCount = repos.reduce((total, repo) => {
    const { language, stargazers_count } = repo
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  // Most used Languages
  const mostUsed = Object.values(languagesCount).sort((a, b) => {
    return b.value - a.value
  }) //.slice(0,5);

  // Most Stars Per Language
  const mostPopular = Object.values(languagesCount)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie2D data={mostUsed} />
        <div></div>
        <Doughnut3D data={mostPopular} />
        <div></div>
        {/* <ExampleChart data={chartData} /> */}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
