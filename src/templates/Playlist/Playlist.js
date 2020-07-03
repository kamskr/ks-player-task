import React from 'react';
import styled, { withTheme } from 'styled-components';
import TopNavbar from '../../components/organisms/TopNavbar/TopNavbar';
import SongDisplay from '../../components/molecules/SongDisplay/SongDisplay';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import cover from '../../assets/covers/cover.png';
import cover1 from '../../assets/covers/cover-1.png';
import unreleased from '../../assets/covers/unreleased_cover.png';
import { connect } from 'react-redux';
import { compose } from 'redux';

const StyledWrapper = styled.div`
  display: flex;
  background-image: ${({ theme }) => theme.backgroundLight};
  flex-direction: column;
  height: 100vh;
`;

const PlaylistWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 10% 10% 0 4%;
  text-align: center;
  flex: 1;
  ol {
    list-style: none;
    counter-reset: item;
    display: flex;
    flex-direction: column;
  }
  li {
    counter-increment: item;
    margin-bottom: 30px;
    display: flex;
  }
  ol li::before {
    content: counter(item);
    width: 40px;
    color: ${({ theme }) => theme.grey};
    display: inline-block;
  }
`;

const More = ({ song, activeSongIndex }) => {
  const covers = [unreleased, cover, cover1];

  return (
    <StyledWrapper>
      <TopNavbar navType="playlist" />
      <PlaylistWrapper>
        <ol>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
          <li>
            <SongDisplay songTitle="Livin' In A Movie" duration={400} />
          </li>
        </ol>
      </PlaylistWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  activeSongIndex: state.songs.activeSongIndex,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default compose(connect(mapStateToProps), withTheme)(More);
