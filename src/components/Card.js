import { useContext } from 'react'
import { GithubContext } from '../context/context'
import styled from 'styled-components'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
const Card = () => {
  const {
    githubUser,
    githubUser: {
      avatar_url,
      html_url,
      company,
      blog,
      name,
      login,
      bio,
      location,
      twitter_username,
    },
  } = useContext(GithubContext)

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name || login} />
        <div>
          <h4>{name || login}</h4>
          <p>
            {twitter_username ? `@${twitter_username}` : 'Twitter not Found!'}
          </p>
        </div>
        <a href={html_url}>GITHUB</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness></MdBusiness>
          {company || 'Not Found!'}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>
          {location || 'Not Found!'}
        </p>
        <a id='blog-link' href={`https://${blog}`}>
          <MdLink />
          {blog}
        </a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;}
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
    p {
      margin-bottom: 0;
    }
  }
  .bio {
    color: var(--clr-grey-3);
    margin-bottom: 0.5rem;
  }
  .links {
    p,
    #blog-link {
      border-radius: none;
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    #blog-link {
      border: none;
      color: var(--clr-primary-5);
      transition: var(--transition);
      text-transform: none;
      padding: 0;
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        background: white;
      }
    }
  }
`
export default Card
