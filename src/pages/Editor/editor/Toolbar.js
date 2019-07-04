import React from 'react';
import {
  ToolbarWrapper,
  FormatToolbar,
  IconBtn,
  FontPreview,
  FontBlock,
  SaveBtn
} from './Toolbar.styles';

const Toolbar = ({ handleMarkClick, toggleFont, font, handleSave }) => {
  return (
    <ToolbarWrapper>
      <FormatToolbar>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'bold')}>
          <i className="fas fa-bold" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'italic')}>
          <i className="fas fa-italic" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'underline')}>
          <i className="fas fa-underline" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'strikethrough')}>
          <i className="fas fa-strikethrough" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'heading')}>
          <i className="fas fa-heading" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'code')}>
          <i className="fas fa-code" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'list')}>
          <i className="fas fa-list-ul" />
        </IconBtn>
        <IconBtn onPointerDown={e => handleMarkClick(e, 'quote')}>
          <i className="fas fa-quote-right" />
        </IconBtn>
      </FormatToolbar>
      <FontBlock>
        <IconBtn onClick={toggleFont}>
          <i className="fas fa-font" />
        </IconBtn>
        <FontPreview>Font: {font}</FontPreview>
        <SaveBtn onClick={handleSave}>Save</SaveBtn>
      </FontBlock>
    </ToolbarWrapper>
  );
};

export default Toolbar;
