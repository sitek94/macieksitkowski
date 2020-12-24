import * as React from 'react'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Container from 'components/container'
import Hero from 'components/big-hero'
import HabitTrackerProject from 'components/projects/habit-tracker'
import PocketGlobeProject from 'components/projects/pocket-globe'
import theme from '../../config/theme'
import {bpMaxSM, bpMaxXS} from '../lib/breakpoints'
import {rhythm, fonts} from '../lib/typography'
import Projects from 'components/projects'
import Markdown from 'react-markdown'
const PostTitle = styled.h3`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  font-size: 22px;
  font-family: ${fonts.regular};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.div`
  width: 100%;
  p {
    margin-bottom: 4px;

    ${bpMaxXS} {
      text-align: justify;
    }
  }
`

export default function Index() {
  return (
    <Layout headerColor={theme.colors.white} logo={false} hero={<Hero />}>
      <SEO />
      <Container
        id="about"
        css={css`
          margin-top: -40px;
          position: relative;
          background: white;
          border-radius: 5px;
          padding: 40px 80px 60px 80px;
          margin-bottom: ${rhythm(1)};
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

          ${bpMaxSM} {
            padding: 40px;
            border-radius: 0;
          }
          h2 {
            margin-top: 0;
            text-align: center;
          }
        `}
      >
        <h2>ABOUT ME</h2>
        <div
          css={css`
            margin-bottom: 40px;
          `}
        >
          <PostTitle>Who am I?</PostTitle>

          <Description>
            <Markdown>
              {`Hi, I'm Maciek, a self-taught programmer from Poland. One day I decided
            to switch career from being waiter/barman. What I didn't know back then is 
            that in the process of learning to code I would soon discover a true passion.`}
            </Markdown>
          </Description>
        </div>

        <div>
          <PostTitle>How did I get here?</PostTitle>
          <Description>
            <Markdown>
              {`I believe that a strong foundation is necessary when one wants to become a master 
            in any field. That's why I took [CS50](https://cs50.harvard.edu/x/2020/) before diving deep into the Frond End world. There
            I learned how to think algorithmically and solve problems efficiently. However, strong foundation is nothing without a practice 
            and this portfolio accumulates the results of my practice.`}
            </Markdown>
          </Description>
        </div>
      </Container>
      <div
        css={css`
          padding: 40px 0;
          text-align: center;
          h2 {
            font-family: ${fonts.light};
          }
        `}
      >
        <h2>MOST RECENT PROJECTS</h2>
        <p>Checkout my most recent work</p>
        <div
          css={css`
            display: grid;
            grid-gap: 40px;
          `}
        >
          <HabitTrackerProject />
          <PocketGlobeProject />
        </div>
      </div>
      <Projects />
    </Layout>
  )
}
