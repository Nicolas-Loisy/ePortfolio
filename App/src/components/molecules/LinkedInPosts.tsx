import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

interface LinkedInPost {
  id: string;
  idIframeUrl?: string;
  url?: string;
}

interface LinkedInPostsProps {
  title: string;
  posts: LinkedInPost[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;
  width: 80%;
  height: fit-content;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.text};
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 5px solid #f9d342;
  @media (max-width: 768px) {
    align-self: flex-start;
    width: fit-content;
  }

  svg {
    color: #0077b5;
  }
`;

const PostsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;
`;

const IframeContainer = styled.div`
  border-radius: 8px;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 500px;
  width: 100%;
  flex-shrink: 0;
  vertical-align: bottom;
  background: #ffffff00;
  height: 601px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 650px;
  }
  @media (max-width: 540px) {
    height: 601px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    display: block;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
  }
`;

const LinkedInPosts: React.FC<LinkedInPostsProps> = ({ title, posts }) => {
  return (
    <Container>
      <Title>
        <FaLinkedin />
        {title}
      </Title>
      <PostsGrid>
        {posts.map((post) => (
          <IframeContainer key={post.id}>
            <iframe
              src={
                post.idIframeUrl
                  ? `https://www.linkedin.com/embed/feed/update/urn:li:share:${post.idIframeUrl}?collapsed=1`
                  : post.url
              }
              title="Post intégré"
            ></iframe>
          </IframeContainer>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default LinkedInPosts;
