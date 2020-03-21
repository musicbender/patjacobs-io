import React from 'react';
import { ItemInfoWrapper, Title, Description, StyledButton } from './styles';

type Props = {
  title: string,
  description?: string,
  isStopped: boolean,
  isParallax: boolean,
  isMobile: boolean,
  buttonUrl?: string,
  buttonText?: string
}

const ItemInfo = ({
  title = 'Project Item',
  description,
  isStopped = false,
  isParallax = false,
  isMobile = false,
  buttonUrl,
  buttonText = 'view project',
}) => {
  const handleParentClick = () => {
      // TODO: change to js routing link when case study pages are built
      window.href = buttonUrl;
  }

  return (
    <ItemInfoWrapper stopped={isStopped} onClick={isMobile ? handleParentClick : null}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {
        !!buttonUrl &&
        <StyledButton 
          isParallax={isParallax}
          stopped={isStopped}
          text={buttonText} 
          url={buttonUrl} 
          isExternal 
        />
      }
    </ItemInfoWrapper>
  );
};

export default ItemInfo;