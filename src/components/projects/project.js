import * as React from 'react'
import {css} from '@emotion/react'
import {rhythm} from '../../lib/typography'
import styles from './styles'
import styled from '@emotion/styled'
import {fonts} from 'lib/typography'
import {bpMaxSM} from '../../lib/breakpoints'
import Markdown from 'react-markdown'
import techImage from './tech-images'
import Img from 'gatsby-image'
import construction from 'images/icons/construction.svg'

export default function Project({
  title,
  description,
  repoUrl,
  homepageUrl,
  banner,
  techs,
  isInDevelopment,
}) {
  return (
    <div
      css={css`
        ${styles}
        ${bpMaxSM} {
        }

        h1 {
          font-size: 22px;
          min-height: 55px;
          ${bpMaxSM} {
            min-height: auto;
          }
        }
        img {
          margin-bottom: 0;
        }
      `}
    >
      {/* Title */}
      <h1>{title}</h1>

      {/* Banner */}
      {banner && (
        <div
          css={css`
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
            .banner {
              transition: transform 0.5s ease-out;
              &:hover {
                transform: scale(1.1);
              }
            }
          `}
        >
          <Img
            className="banner"
            fluid={banner.childImageSharp.fluid}
            alt="App's banner"
          />
          {isInDevelopment && (
            <div
              css={css`
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.7);
                img {
                  height: 50%;
                }
              `}
            >
              <img src={construction} alt="Screwdriver and hammer" />
              WORK IN PROGRESS
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <Markdown
          css={css`
            p {
              font-size: 16px;
              color: hsla(0, 0%, 0%, 0.75);
              margin-top: ${rhythm(0.5)};
            }
            height: 110px;
            overflow: hidden;
          `}
        >
          {description}
        </Markdown>
      )}
      <a
        css={css`
          display: block;
          margin-top: 20px;
          font-size: 16px;
          &:hover {
            text-decoration: underline;
          }
        `}
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source code{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="9"
          viewBox="0 0 6 9"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="57 18 60.5 21.5 57 25"
            transform="translate(-56 -17)"
          />
        </svg>
      </a>
      <div
        css={css`
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Button href={homepageUrl} target="_blank" rel="noopener noreferrer">
          Project live
        </Button>
        <span
          css={css`
            display: grid;
            grid-auto-flow: column;
            grid-gap: 5px;
          `}
        >
          {/* Technology icons */}
          {techs.map(tech => (
            <img
              key={tech}
              width="30px"
              height="30px"
              src={techImage(tech).src}
              alt={techImage(tech).label}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

// function Tooltip({text, children}) {
//   return (
//     <div
//       css={css`
//         position: relative;
//         span {
//           position: absolute;
//           top: 60%;
//           left: -50%;
//           margin-top: 10px;
//           padding: 0.55rem 1rem;
//           font-size: 1rem;
//           font-weight: 500;
//           color: #000;
//           border-radius: 50px;
//           background-color: #fff;
//           box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
//             0 5px 15px rgba(0, 0, 0, 0.07);

//           pointer-events: none;
//           user-select: none;
//           opacity: 0;
//           transition: all 0.2s ease-in-out;
//         }

//         &:hover span {
//           top: 100%;
//           opacity: 0.9;
//         }
//       `}
//     >
//       {children}
//       <span>{text}</span>
//     </div>
//   )
// }

const Button = styled.a({
  cursor: 'pointer',
  padding: '6px 12px',
  color: '#573EDE !important',
  backgroundColor: 'white',
  borderRadius: '5px',
  fontSize: '16px',
  fontFamily: fonts.semibold,
  border: '1px solid #573EDE',
  transition: 'all 300ms ease',
  ':hover': {
    transition: 'all 300ms ease',
    color: 'white !important',
    backgroundImage:
      'linear-gradient(180deg, #4A60DE 0%, #2F43C2 100%) !important',
    border: '1px solid #573EDE',
  },
})
