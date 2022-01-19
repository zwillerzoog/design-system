import React from 'react';

// TODO: use a public url for Storybook
// TODO: remove inline styles and add to project scss
const Storybookiframe = ({ componentName }) => {
  return (
    <div style={{ border: '1px solid #c6c6c6' }}>
      <iframe
        src={`http://design-system-demo.s3-website-us-east-1.amazonaws.com/WNMGDS-1121/icon-css-refs-cleanup/core/storybook/iframe.html?id=components-${componentName}--default&args=&viewMode=story`}
        id={`${componentName}-example`}
        style={{ width: '100%', height: '350px', border: 'none' }}
        title={`${componentName}-iframe`}
      />
      <div style={{ backgroundColor: '#f1f1f1', padding: '8px' }}>
        <a
          href={`http://design-system-demo.s3-website-us-east-1.amazonaws.com/WNMGDS-1121/icon-css-refs-cleanup/core/storybook/?path=/story/components-${componentName}--default`}
        >
          Open in Storybook
        </a>
      </div>
    </div>
  );
};

export default Storybookiframe;
