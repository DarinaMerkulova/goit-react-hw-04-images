import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="rgb(26, 127, 141)"
        box-shadow="0 0 7px rgb(26, 127, 141)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        text-align="center"
      />
    </StyledLoader>
  );
};
