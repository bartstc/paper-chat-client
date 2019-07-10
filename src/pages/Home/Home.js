import React from 'react';
import Showcase from '../../components/Showcase/Showcase';
import homeImage from '../../assets/home.png';
import {
  HomeWrapper,
  Title,
  Subtitle,
  SocialMedia,
  SocialItem,
  SocialLink
} from './Home.styles';

import Link from '../../components/Link/Link';

const Home = () => {
  return (
    <Showcase imageUrl={homeImage}>
      <HomeWrapper>
        <Title>
          Sign in & try our
          <br />
          <span>text editor</span> for free.
        </Title>
        <Subtitle>
          Access your files anytime, anywhere! Thanks to PaperChat you can
          create, update, store and share your text files with friends and team
          members. It very simple to use. Try it now and see how it works!
        </Subtitle>
        <Link to="/signup">Sign up for free</Link>
        <SocialMedia>
          <SocialItem>
            <SocialLink
              href="https://aboutme.google.com/"
              aria-label="Google plus"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-google-plus-g" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-twitter" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-facebook-f" />
            </SocialLink>
          </SocialItem>
        </SocialMedia>
      </HomeWrapper>
    </Showcase>
  );
};

export default Home;
