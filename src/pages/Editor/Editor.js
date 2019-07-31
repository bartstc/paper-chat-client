/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
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
import SpinnerSm from '../../components/Spinner/SpinnerSm';

const fonts = ['Lato', 'Poppins', 'Montserrat'];

const TextEditor = props => {
  useEffect(() => {
    fetchDocument();
  }, []);

  const fetchDocument = async () => {
    try {
      const { data } = await axios.get(`/documents/${props.match.params.id}`);
      const text = JSON.parse(data.text);
      setValue(Value.fromJSON(text));
    } catch (err) {
      console.log(err);
    }
  };

  const [value, setValue] = useState(null);
  const [font, setFont] = useState('Lato');

  const onAutoSave = useCallback(() => {
    saveDocument();
  }, [value]);

  useEffect(() => {
    const autoSave = setInterval(() => {
      onAutoSave();
    }, 180000); // save every 3 minutes
    return () => clearInterval(autoSave);
  }, [onAutoSave]);

  const onChange = ({ value }) => {
    setValue(value);
  };

  const saveDocument = async () => {
    try {
      await axios.patch(`/documents/${props.match.params.id}`, {
        text: JSON.stringify(value.toJSON())
      });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFont = () => {
    const currentFont = font;
    const index = fonts.findIndex(f => f === currentFont);
    if (index === fonts.length - 1) {
      setFont(fonts[0]);
    } else {
      setFont(fonts[index + 1]);
    }
  };

  const onKeyDown = (e, change) => {
    if (!e.ctrlKey) {
      return;
    }

    e.preventDefault();

    // Decide what to do based on the key code...
    // When "b" is pressed, add a "bold" mark to the text and so one.
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
        saveDocument();
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
    // disabling browser default behavior like page refresh, etc
    e.preventDefault();

    // applying the formatting on the selected text
    // which the desired formatting
    const change = value.change().toggleMark(type);

    // calling the  onChange method we declared
    onChange(change);
  };

  return (
    <Wrapper>
      {!value ? (
        <SpinnerSm />
      ) : (
        <Limiter>
          <Toolbar
            handleMarkClick={onMarkClick}
            toggleFont={toggleFont}
            font={font}
            handleSave={saveDocument}
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
      )}
    </Wrapper>
  );
};

export default TextEditor;
