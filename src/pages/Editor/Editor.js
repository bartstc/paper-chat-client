import React, { useState } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import {
  Code,
  Quote,
  Header,
  StrikeThrough,
  Wrapper,
  EditorWrapper,
  Limiter
} from './Editor.styles';
import Toolbar from './editor/Toolbar';

const fonts = ['Lato', 'Poppins', 'Montserrat'];

/* 
Add info about shortcuts:
autosave every 3 min
Ctrl + s
Ctrl + b
Ctrl + i
Ctrl + u
*/

const TextEditor = () => {
  const existingValue = JSON.parse(localStorage.getItem('text'));
  const initialValue = Value.fromJSON(
    existingValue || {
      document: {
        nodes: [
          {
            object: 'block',
            type: 'paragraph',
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    text: 'My first paragraph!'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  );

  const [value, setValue] = useState(initialValue);
  const [font, setFont] = useState('Lato');

  // On change, update the app's React state with the new editor value.
  const onChange = ({ value }) => {
    setValue(value);
  };

  const onSave = () => {
    window.localStorage.setItem('text', JSON.stringify(value.toJSON()));
    console.log('saved');
  };

  const toggleFont = () => {
    const currentFont = font;
    const index = fonts.findIndex(f => f === currentFont);
    if (index === fonts.length - 1) {
      setFont(fonts[0]);
      // save font in db
    } else {
      setFont(fonts[index + 1]);
      // save font in db
    }
  };

  const onKeyDown = (e, change) => {
    if (!e.ctrlKey) {
      return;
    }

    e.preventDefault();

    /* Decide what to do based on the key code... */
    /* When "b" is pressed, add a "bold" mark to the text and so one. */
    switch (e.key) {
      case 'b': {
        change.toggleMark('bold');
        return true;
      }
      case 'i': {
        change.toggleMark('italic');
        return true;
      }

      case 'u': {
        change.toggleMark('underline');
        return true;
      }

      case 's': {
        onSave();
        return true;
      }

      default: {
        return;
      }
    }
  };

  const renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <strong {...props.attributes}>{props.children}</strong>;

      case 'italic':
        return (
          <em {...props.attributes} property="italic">
            {props.children}
          </em>
        );

      case 'code':
        return <Code {...props.attributes}>{props.children}</Code>;

      case 'list':
        return (
          <ol {...props.attributes}>
            <li>{props.children}</li>
          </ol>
        );

      case 'underline':
        return <u {...props.attributes}>{props.children}</u>;

      case 'quote':
        return (
          <em property="italic">
            <Quote {...props.attributes}>{props.children}</Quote>
          </em>
        );

      case 'heading':
        return <Header {...props.attributes}>{props.children}</Header>;

      case 'strikethrough':
        return <StrikeThrough>{props.children}</StrikeThrough>;

      default: {
        return;
      }
    }
  };

  const onMarkClick = (e, type) => {
    /* disabling browser default behavior like page refresh, etc */
    e.preventDefault();

    /*
			applying the formatting on the selected text
			which the desired formatting
		*/
    const change = value.change().toggleMark(type);

    /* calling the  onChange method we declared */
    onChange(change);
  };

  return (
    <Wrapper>
      <Limiter>
        <Toolbar
          handleMarkClick={onMarkClick}
          toggleFont={toggleFont}
          font={font}
          handleSave={onSave}
        />
        <EditorWrapper font={font}>
          <Editor
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            renderMark={renderMark}
          />
        </EditorWrapper>
      </Limiter>
    </Wrapper>
  );
};

export default TextEditor;
