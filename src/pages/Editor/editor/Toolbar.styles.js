import styled from 'styled-components';
import { device } from '../../../utils/styles';

export const ToolbarWrapper = styled.div`
  border-bottom: solid 2px rgba(226, 226, 226, 0.55);
  padding-bottom: 20px;
  margin: 0 0 30px 0;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const FormatToolbar = styled.div`
  display: flex;
  margin-bottom: 0.4em;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const IconBtn = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  padding: 0 12px;
  font-size: 0.85rem;
  color: #aaa;
`;

export const FontPreview = styled.p`
  height: 100%;
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
  color: #aaa;
  line-height: 100%;
  margin-bottom: 2px;
`;

export const FontBlock = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    margin: 0;
    margin-left: 11px;
  }
`;

export const SaveBtn = styled.button`
  margin-left: 1em;
  border: 1px solid #aaa;
  background: transparent;
  color: #aaa;
  font-size: 0.75rem;
  font-family: inherit;
  text-transform: uppercase;
  padding: 0 0.9em;

  @media ${device.tablet} {
    padding: 0 1.3em;
  }
`;
