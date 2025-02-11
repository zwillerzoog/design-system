import React from 'react';
/* eslint-disable react/no-danger */
import { useRef, useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { ArrowIcon, Button } from '@cmsgov/design-system';
import { highlightHtmlSyntax } from '../../helpers/syntaxHighlighting';

enum SnippetState {
  CLOSED = 'closed',
  HTML = 'html',
  JSX = 'jsx',
}

interface ExampleFooterProps {
  /**
   * html string to prettify, highlight and display
   */
  html: string;
  /**
   * pre-highlighted jsx html as a string, because we gather it by scraping
   */
  highlightedJsx?: string;
  /**
   * A link or something to render to the right of the code button(s)
   */
  sourceLink?: React.ReactElement;
}

/**
 * HTML code snippet. This component will prettify an html string and do syntax highlighting
 */
const ExampleFooter = ({ html, highlightedJsx, sourceLink }: ExampleFooterProps) => {
  const [snippetState, setSnippetState] = useState<SnippetState>(SnippetState.CLOSED);
  const highlightedHtml = html && highlightHtmlSyntax(html);

  const snippetIdPrefix = useRef(uniqueId('example-snippet-')).current;
  const getButtonId = (snippetState: SnippetState) => `${snippetIdPrefix}-${snippetState}-toggle`;
  const getSnippetId = (snippetState: SnippetState) => `${snippetIdPrefix}-${snippetState}`;

  const buttons = [{ snippetState: SnippetState.HTML, text: 'HTML code' }];
  const snippets = [{ snippetState: SnippetState.HTML, code: highlightedHtml }];

  if (highlightedJsx) {
    buttons.unshift({ snippetState: SnippetState.JSX, text: 'React code' });
    snippets.unshift({ snippetState: SnippetState.JSX, code: highlightedJsx });
  }

  const codeToggles = buttons.map((buttonConfig) => (
    <Button
      key={buttonConfig.snippetState}
      variation="ghost"
      size="small"
      className="c-code-snippet-toggle ds-u-margin-right--2"
      aria-expanded={buttonConfig.snippetState === snippetState}
      aria-controls={getSnippetId(buttonConfig.snippetState)}
      id={getButtonId(buttonConfig.snippetState)}
      onClick={() =>
        setSnippetState(
          buttonConfig.snippetState === snippetState
            ? SnippetState.CLOSED
            : buttonConfig.snippetState
        )
      }
    >
      <ArrowIcon direction="right" /> {buttonConfig.text}
    </Button>
  ));

  const codeSnippets = snippets.map((snippetConfig) => (
    <div
      key={snippetConfig.snippetState}
      aria-labelledby={getButtonId(snippetConfig.snippetState)}
      id={getSnippetId(snippetConfig.snippetState)}
      hidden={snippetConfig.snippetState !== snippetState}
    >
      <pre className="ds-u-margin-bottom--4 ds-u-overflow--auto ds-u-padding--2">
        <code
          dangerouslySetInnerHTML={{ __html: snippetConfig.code }}
          className={`language-${snippetConfig.snippetState}`}
        />
      </pre>
    </div>
  ));

  return (
    <div className="c-example-footer">
      <div className="ds-u-display--flex ds-u-justify-content--between">
        <div>{codeToggles}</div>
        <div>{sourceLink}</div>
      </div>
      {codeSnippets}
    </div>
  );
};

export default ExampleFooter;
