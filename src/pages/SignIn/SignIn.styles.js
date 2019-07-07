import styled from 'styled-components';
import { device } from '../../utils/styles';

export const FormWrapper = styled.div`
  min-height: 80vh;
  max-width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    max-width: 860px;
  }
`;
