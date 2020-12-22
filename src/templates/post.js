import * as React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import SEO from 'components/seo'
import {css} from '@emotion/react'
import Container from 'components/container'
import Layout from 'components/layout'
import SubscribeForm from 'components/forms/subscribe'
import BlogPostFooter from 'components/blog-post-footer'
import Markdown from 'react-markdown'
import {fonts} from '../lib/typography'
import config from '../../config/website'
import {bpMaxSM} from '../lib/breakpoints'
import get from 'lodash/get'

// to add back tickets check to the page, check this commit where
// that was removed: c94057d

export default function PostPage({data: {site, mdx}}) {
  const {
    editLink,
    historyLink,
    title,
    date,
    slug,
    description,
    banner,
    bannerCredit,
    noFooter,
    // keywords,
  } = mdx.fields

  const blogPostUrl = `${config.siteUrl}${slug}`

  return (
    <Layout
      site={site}
      frontmatter={mdx.fields}
      headerLink="/blog"
      noFooter={noFooter}
      subscribeForm={<SubscribeForm />}
    >
      <SEO
        frontmatter={mdx.fields}
        metaImage={get(mdx, 'fields.banner.childImageSharp.fluid.src')}
        isBlogPost
      />
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container
          css={css`
            padding-top: 20px;
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              margin-top: 0;
              font-family: ${fonts.light};
            `}
          >
            {title}
          </h1>
          {banner && (
            <div
              css={css`
                text-align: center;

                p {
                  margin-bottom: 0;
                }
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                fluid={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
              {bannerCredit ? <Markdown>{bannerCredit}</Markdown> : null}
            </div>
          )}
          <br />
          {description ? <Markdown>{description}</Markdown> : null}
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <a href={historyLink}>
          <time
            css={{
              textAlign: 'right',
              display: 'block',
              fontSize: '12px',
              marginBottom: '10px',
            }}
            title="Last Updated Date"
          >
            {date}
          </time>
        </a>
      </Container>
      <Container noVerticalPadding>
        <p css={{textAlign: 'right'}}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            // using mobile.twitter.com because if people haven't upgraded
            // to the new experience, the regular URL wont work for them
            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
              blogPostUrl,
            )}`}
          >
            Discuss on Twitter
          </a>
          <span css={{marginLeft: 10, marginRight: 10}}>{` • `}</span>
          <a target="_blank" rel="noopener noreferrer" href={editLink}>
            Edit post on GitHub
          </a>
        </p>
      </Container>
      <Container>
        <BlogPostFooter />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        keywords
      }
    }
    mdx(fields: {id: {eq: $id}}) {
      fields {
        editLink
        historyLink
        title
        date
        noFooter
        description
        plainTextDescription
        author
        banner {
          ...bannerImage720
        }
        bannerCredit
        slug
        keywords
      }
      body
    }
  }
`
