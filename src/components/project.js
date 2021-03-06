import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Icon } from './icons/icon';

import DoodlGifs from '../content/projects/gifs/Doodl.gif'
import FlockingBirdsGifs from '../content/projects/gifs/FlockingBirds.gif'
import NextdoorCooksGifs from '../content/projects/gifs/NextdoorCooks.gif'
import VinterestGifs from '../content/projects/gifs/Vinterest.gif'
import CTKGifs from '../content/projects/gifs/CTK2017SS.gif'

const StyledProjectSection = styled.div`
  h2 {
      margin-bottom: 0px;
    }
`
const StyledProject = styled.div`

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  
  &:not(:last-of-type) {
    padding-bottom: 200px;

    @media (max-width: 1080px) { 
      padding-bottom: 120px;
    }

    @media (max-width: 768px) {
      padding-bottom: 70px;
    }
  }

  
  .project-title {
    font-family: Lora;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 0px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  .project-bottom {
    grid-row: 2 / -1;
    border-radius: 5px;
    padding: 2rem 1.75rem;
    background-color: var(--purple);
    position: relative;
    
    .line {
        position: absolute;
        width: 17.71px;
        height: 4px;
        left: 1.75rem;
        top: 2rem;
        background-color: var(--blue-gray);
        margin-botto: 0.7em;
    }
    
    .links {

      a { 
        width: 20px;
        height: 20px;
        margin-right: 1.75em;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          transition: var(--transition);
        }
      }

      svg {
        fill: var(--blue-gray);
        &:hover,
        &:focus {
          fill: var(--white);
          transition: var(--transition);
        }
      }
    }
    
    @media (max-width: 580px) {
      ${'' /* height: 130px; */}
    }
  }

  .project-description {
    color: var(--blue-gray);
    padding: 1em 0;
    text-align: left;
    
  }
  
  .collaborator {
    color: var(--blue-gray);
    text-decoration: underline;
    &:hover,
    &:focus {
      color: var(--white);
    }
  }
  
  .web-template{
    
    flex: 0 ;
    padding: calc(.75rem + 8px);
    text-align: center;
    position: relative;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.0175em;

    border:1px solid var(--purple);
    border-radius: 11px;
    margin: 10px 0px 10px;

    a {
      width: 100%;
      position: relative;
      padding-bottom: calc(62.5% + 1.7rem) !important;
      height: 0;
      vertical-align: top;
      display: inline-block !important;
      line-height: 0;
      margin: 0;
    }
    
    .site_header {
      height: 1.7rem;
      border-top: 1px solid var(--purple);
      border-left: 1px solid var(--purple);
      border-right: 1px solid var(--purple);
      border-bottom: none;
      border-radius: 0;
      background: var(--background);
      z-index: -1;
      vertical-align: top;
      line-height: 0;
      padding: .3rem 0 0 3rem;
      position: relative;
      text-align: left;
    }
    .header_buttons{
      border: 0;
      margin: 0;
      padding: 0;
      
    }
    .header_buttons>div {
        display: inline-block;
        margin-left: -2.4rem;
        width: 6rem;
        height: 6rem;
        border-radius: 100%;
        transform: scale(.15);
        transform-origin: 0 0;
        margin-right: -2.4rem;
        border: 6px solid var(--purple);
    }
    img{
      border: 1px solid var(--purple);
    }
  }
  
  .project-num {
    text-align: right;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    z-index: 2;
    margin: 10px 0px 10px;
    padding: 0px;
    list-style: square;
    width: 80%;
    li{
      margin: 0px 1em 5px 0px;
    }
  }
  .project-image{
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    grid-row-start: 1;
    grid-row-end: 6;

    @media (max-width: 768px) {
      grid-row: 1/2;
      grid-column: 1 / -1;
    }
  }
  .project-info {
    z-index: 30;
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    grid-row-start: 1;
    grid-row-end: 7;

    @media (max-width: 950) {
      grid-column: 1 / 8;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      grid-row: 2/3;
    }
  }

  &:nth-of-type(odd) {
    .project-num {
      text-align: left;
    }
    .links a { 
      margin-left: 1.75em;
      margin-right: 0em;
    }
    .project-info {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 950) {
      grid-column: 6 / -1;
      }

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        grid-row: 2/3;
      }

    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 1 / -1;
      }
    }

    .project-top {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .project-tech {
      -webkit-box-pack: end;
      justify-content: flex-end;
      li{
        margin: 0px 0px 5px 1em;
      }
    }
  }
  .img {
      max-width: 653.8px;
      @media (max-width: 768px) {
        object-fit: cover;
        ${'' /* width: 100%; */}
      }
      
      
    }
    .img:before{
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      right: -15px;
      bottom: -15px;
      border: 1px solid red;
      z-index: -1;

    }

`;

const gifs = {'Doodl': DoodlGifs, 'Vinterest': VinterestGifs, 'Flocking Birds': FlockingBirdsGifs, 'Nextdoor Cooks': NextdoorCooksGifs, 'CTK Lookbook': CTKGifs}


const Project = () => {
  const data = useStaticQuery( graphql`
  query {
    projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/projects/"}
          frontmatter: { show: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              github
              live
              tech
              gif
              coverImg {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
            html
          }
        }
      }
    }
  `)

  const addImage = (isGif, title, coverImg)=>{
    if(isGif){
      return <img src={gifs[title]} alt={title} className="img" />
    }else{
      // debugger
      return <Img fluid={coverImg.childImageSharp.fluid} alt={title} className="img" />
    }
  
    /* <img src={doodlGIF} className="img" /> */
    // <Img fluid={coverImg.childImageSharp.fluid} alt={title} className="img" />
  
  }
  const projects = data.projects.edges.filter(({ node }) => node);
  // console.log("Project List : ", projects)
  return(
    <StyledProjectSection className='main' id="projects">
      { projects.map(({ node },i) => {
        const {frontmatter, html} = node
        const {title, github, live, coverImg, gif, tech} = frontmatter
        return(
          <StyledProject key={'project '+i}>
            <div className="project-image">
            <h5 className='project-num'>Projects/0{i+1}</h5>
              <div className="web-template" aria-label={title}>
                <a href={live} className="image-link" >
                  <div className="site_header" >
                    <div className="header_buttons">
                      <div></div><div></div><div></div>
                    </div>
                  </div>
                  {addImage(gif,title,coverImg)}
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-top">
                
                <h2 className="project-title">{title}</h2>
                <div className="project-tech">
                  {tech.map( (techList, j) => (<li key={title+' techList '+j} >{techList}</li>) )}
                </div>
              </div>
              
              <div className="project-bottom">
                <div className="line"></div>
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className='links'>
                  <a href={github} aria-label={github} target="_blank" rel="noopener noreferrer">
                    <Icon name={'GitHub'} />
                  </a>
                  <a href={live} aria-label={live} target="_blank" rel="noopener noreferrer">
                    <Icon name={'Link'} />
                  </a>
                </div>
                

              </div>
            </div>
          </StyledProject>
        )
      })}
      {/* <p>{JSON.stringify(data, null, 4)}</p> */}
    </StyledProjectSection>
    
  )
}



export default Project