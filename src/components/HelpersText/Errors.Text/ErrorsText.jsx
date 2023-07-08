import { FaRegFaceFrown } from 'react-icons/fa6';
import { StyledErrorText } from './ErrorsText.styled';

export const ErrorText = () => (
  <StyledErrorText>
    <p>OOPS, something went wrong.</p>
    <FaRegFaceFrown size="100px" />
  </StyledErrorText>
);
