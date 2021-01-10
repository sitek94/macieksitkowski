import * as React from 'react'
import {css} from '@emotion/react'
import theme from '../../config/theme'
import Container from './container'
import {Link} from 'gatsby'

const Toggle = ({color = 'white'}) => {
  const [isToggledOn, setToggle] = React.useState(false)
  const toggleOff = () => setToggle(false)
  const toggle = () => setToggle(!isToggledOn)

  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggledOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${theme.brand.primary};
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                color: white;
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              }
              .active {
                background: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            <Link
              aria-label="Go to about section"
              to="/#about"
              onClick={toggleOff}
            >
              About
            </Link>
            <Link
              aria-label="Go to major projects section"
              to="/#major-projects"
              onClick={toggleOff}
            >
              Major projects
            </Link>
            <Link
              aria-label="Go to projects section"
              to="/#all-projects"
              onClick={toggleOff}
            >
              All projects
            </Link>
            <Link
              aria-label="Go to contact section"
              to="/#contact"
              onClick={toggleOff}
            >
              Contact
            </Link>
          </Container>
        </div>
      )}
    </div>
  )
}

export default Toggle
