import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
//icons
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import NextIcon from '../../../assets/icons/next_ico.svg';
import PreviousIcon from '../../../assets/icons/previous_ico.svg';
import RepeatIcon from '../../../assets/icons/repeat_ico.svg';
import ShuffleIcon from '../../../assets/icons/shuffle_ico.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MediaControllBar = ({ isPlaying }) => (
  <StyledWrapper>
    <ButtonIcon icon={ShuffleIcon} />;
    <ButtonIcon icon={PreviousIcon} />;
    {isPlaying === 'true' && <ButtonIcon icon={PlayActiveIcon} playingIcon />}
    {isPlaying === 'false' && <ButtonIcon icon={PlayInactiveIcon} notPlayingIcon />}
    <ButtonIcon icon={NextIcon} />;
    <ButtonIcon icon={RepeatIcon} />;
  </StyledWrapper>
);

MediaControllBar.propTypes = {
  isPlaying: PropTypes.oneOf(['true', 'false']),
};

MediaControllBar.defaultProps = {
  isPlaying: 'false',
};

export default MediaControllBar;
