import React from 'react';
import Alert from '../Alert/Alert';
export default {
  title: 'Foundations/Typography/Base',
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};

const alert = (
  <Alert heading="This is a simple heading">
    <p className="ds-c-alert__text">
      Lorem ipsum dolor sit <a href="https://design.cms.gov/">link text</a>, consectetur adipiscing
      elit, sed do eiusmod. Alerts can have chidren, or they can be left off and used with just a
      heading prop.
    </p>
  </Alert>
);

const body =
  'In Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

const header = 'The quick brown fox jumps over the lazy dog';

export const AllBaseText = () => {
  return (
    <div className="ds-content">
      <h1>H1: {header}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae dui tortor. Nam eu
        mollis lectus. Pellentesque euismod est id suscipit aliquet. Nam pulvinar cursus orci, in
        feugiat elit fringilla ac. Donec finibus ante ac lorem hendrerit lobortis. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        viverra ipsum orci, vulputate egestas diam ullamcorper ac. Quisque at mi vitae ipsum
        elementum commodo. Suspendisse dictum nibh ipsum, eget commodo odio faucibus non. Nunc dui
        lacus, ultricies eu neque id, tincidunt cursus neque. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </p>
      <ul>
        <li>List item</li>
        <li>
          List item
          <ul>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
          </ul>
        </li>
        <li>List item</li>
      </ul>
      <p>
        Curabitur eget ligula enim. Sed imperdiet, nibh imperdiet ultricies dictum, tortor urna
        dapibus risus, eu pulvinar risus nibh eget ligula. Mauris sollicitudin elementum elit nec
        auctor. Morbi accumsan odio et efficitur finibus. Curabitur placerat tellus nec massa
        rhoncus, vel posuere justo tincidunt. Sed a orci et lorem feugiat facilisis eget tristique
        tellus. Quisque quis eros lectus. Proin viverra, risus laoreet vulputate fringilla, quam
        risus rhoncus lacus, rutrum iaculis mi eros vel ex. Quisque sed dictum nunc. Nam pretium
        orci at interdum ultrices. Suspendisse faucibus justo eget mi varius tristique. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin quis
        magna iaculis, aliquet ligula sit amet, fringilla leo. Vestibulum aliquet mi nec velit
        mollis, quis rutrum massa tincidunt. Morbi bibendum erat non orci feugiat, quis pretium
        magna vestibulum.
      </p>
      <h2>H2: {header}</h2>
      <p>
        Etiam feugiat tincidunt fringilla. Pellentesque imperdiet rutrum tempus. Maecenas vel lectus
        quis quam porta viverra vel quis ipsum. Suspendisse bibendum lacus sed elit cursus, quis
        fermentum odio viverra. Nulla ac ornare sapien. Mauris auctor ultricies turpis. Proin vitae
        sem nec magna placerat malesuada. Praesent pellentesque nulla ut dolor porttitor hendrerit.
      </p>
      <h3>H3: {header}</h3>
      <p>
        Nunc laoreet fringilla risus, ac porttitor justo consectetur quis. Morbi consequat urna eu
        laoreet aliquam. In hac habitasse platea dictumst. Quisque condimentum justo ut mi posuere
        rhoncus. Vivamus nec felis nec metus volutpat porttitor. Donec congue accumsan augue, a
        rutrum ex commodo in. Etiam venenatis ligula ante, sed efficitur metus tristique vitae.
        Donec at tempor quam, cursus rhoncus nisl. Ut feugiat lorem eu iaculis placerat. Etiam
        faucibus nunc et nulla posuere sagittis. Praesent non maximus magna. Morbi ultrices, sem in
        ullamcorper porta, ante mi pretium justo, vitae pellentesque dui quam eget enim. Aenean
        velit orci, dignissim a purus sit amet, interdum efficitur erat.
      </p>
      <ol>
        <li>List item</li>
        <li>
          List item
          <ol>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
          </ol>
        </li>
        <li>List item</li>
      </ol>
      <h4>H4: {header}</h4>
      <p>
        Donec ut mauris pellentesque, mollis massa eu, tempor ipsum. Suspendisse potenti. Vivamus
        rutrum lorem in felis lacinia vulputate. Phasellus sit amet nulla ut sem laoreet placerat ac
        tristique enim. Fusce facilisis semper nibh, quis egestas mi varius vel. Aenean eget sodales
        justo. Curabitur ut imperdiet justo. Integer sed sem sem.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis at risus
        mattis tempus. Ut quis turpis vulputate, venenatis urna vel, vulputate sem. Suspendisse
        fringilla mi sed ante dictum ullamcorper. Pellentesque sed neque eu quam posuere pretium.
        Sed eu facilisis nulla, eget vestibulum purus. Duis molestie at nibh sit amet scelerisque.
        Donec imperdiet lacus at elit dapibus dignissim. In at rutrum metus. Curabitur vitae
        consequat risus. Nulla quam enim, vehicula eget congue ac, laoreet eu mauris. Fusce congue,
        nisl quis lacinia elementum, ante quam sagittis ipsum, volutpat eleifend nisl sem aliquet
        quam. Nunc nec ipsum ac augue hendrerit fringilla mattis in ex.
      </p>
      <p>
        Nam eu mollis lectus. Pellentesque euismod est id suscipit aliquet. Nam pulvinar cursus
        orci, in feugiat elit fringilla ac. Donec finibus ante ac lorem hendrerit lobortis.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Suspendisse viverra ipsum orci, vulputate egestas diam ullamcorper ac. Quisque at
        mi vitae ipsum elementum commodo.
      </p>
      <h5>H5: {header}</h5>
      <p>
        Sed a orci et lorem feugiat facilisis eget tristique tellus. Quisque quis eros lectus. Proin
        viverra, risus laoreet vulputate fringilla, quam risus rhoncus lacus, rutrum iaculis mi eros
        vel ex. Quisque sed dictum nunc. Nam pretium orci at interdum ultrices. Suspendisse faucibus
        justo eget mi varius tristique. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Proin quis magna iaculis, aliquet ligula sit amet, fringilla
        leo. Vestibulum aliquet mi nec velit mollis, quis rutrum massa tincidunt. Morbi bibendum
        erat non orci feugiat, quis pretium magna vestibulum.
      </p>
      <h6>H6: {header}</h6>
      <p>
        Etiam venenatis ligula ante, sed efficitur metus tristique vitae. Donec at tempor quam,
        cursus rhoncus nisl. Ut feugiat lorem eu iaculis placerat. Etiam faucibus nunc et nulla
        posuere sagittis. Praesent non maximus magna. Morbi ultrices, sem in ullamcorper porta, ante
        mi pretium justo, vitae pellentesque dui quam eget enim. Aenean velit orci, dignissim a
        purus sit amet, interdum efficitur erat.
      </p>
    </div>
  );
};
export const AllBaseTextOnDark = AllBaseText.bind({});
AllBaseTextOnDark.parameters = {
  baseInverse: true,
};

export const AllBaseTextWithAlerts = () => {
  return (
    <div className="ds-content">
      <h1>H1: {header}</h1>
      {alert}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae dui tortor. Nam eu
        mollis lectus. Pellentesque euismod est id suscipit aliquet. Nam pulvinar cursus orci, in
        feugiat elit fringilla ac. Donec finibus ante ac lorem hendrerit lobortis. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        viverra ipsum orci, vulputate egestas diam ullamcorper ac. Quisque at mi vitae ipsum
        elementum commodo. Suspendisse dictum nibh ipsum, eget commodo odio faucibus non. Nunc dui
        lacus, ultricies eu neque id, tincidunt cursus neque. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </p>
      {alert}
      <ul>
        <li>List item</li>
        <li>
          List item
          <ul>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
          </ul>
        </li>
        <li>List item</li>
      </ul>
      <p>
        Curabitur eget ligula enim. Sed imperdiet, nibh imperdiet ultricies dictum, tortor urna
        dapibus risus, eu pulvinar risus nibh eget ligula. Mauris sollicitudin elementum elit nec
        auctor. Morbi accumsan odio et efficitur finibus. Curabitur placerat tellus nec massa
        rhoncus, vel posuere justo tincidunt. Sed a orci et lorem feugiat facilisis eget tristique
        tellus. Quisque quis eros lectus. Proin viverra, risus laoreet vulputate fringilla, quam
        risus rhoncus lacus, rutrum iaculis mi eros vel ex. Quisque sed dictum nunc. Nam pretium
        orci at interdum ultrices. Suspendisse faucibus justo eget mi varius tristique. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin quis
        magna iaculis, aliquet ligula sit amet, fringilla leo. Vestibulum aliquet mi nec velit
        mollis, quis rutrum massa tincidunt. Morbi bibendum erat non orci feugiat, quis pretium
        magna vestibulum.
      </p>
      {alert}
      <h2>H2: {header}</h2>
      {alert}
      <p>
        Etiam feugiat tincidunt fringilla. Pellentesque imperdiet rutrum tempus. Maecenas vel lectus
        quis quam porta viverra vel quis ipsum. Suspendisse bibendum lacus sed elit cursus, quis
        fermentum odio viverra. Nulla ac ornare sapien. Mauris auctor ultricies turpis. Proin vitae
        sem nec magna placerat malesuada. Praesent pellentesque nulla ut dolor porttitor hendrerit.
      </p>
      {alert}
      <h3>H3: {header}</h3>
      <p>
        Nunc laoreet fringilla risus, ac porttitor justo consectetur quis. Morbi consequat urna eu
        laoreet aliquam. In hac habitasse platea dictumst. Quisque condimentum justo ut mi posuere
        rhoncus. Vivamus nec felis nec metus volutpat porttitor. Donec congue accumsan augue, a
        rutrum ex commodo in. Etiam venenatis ligula ante, sed efficitur metus tristique vitae.
        Donec at tempor quam, cursus rhoncus nisl. Ut feugiat lorem eu iaculis placerat. Etiam
        faucibus nunc et nulla posuere sagittis. Praesent non maximus magna. Morbi ultrices, sem in
        ullamcorper porta, ante mi pretium justo, vitae pellentesque dui quam eget enim. Aenean
        velit orci, dignissim a purus sit amet, interdum efficitur erat.
      </p>
      <ol>
        <li>List item</li>
        <li>
          List item
          <ol>
            <li>Subitem 1</li>
            <li>Subitem 2</li>
          </ol>
        </li>
        <li>List item</li>
      </ol>
      <h4>H4: {header}</h4>
      <p>
        Donec ut mauris pellentesque, mollis massa eu, tempor ipsum. Suspendisse potenti. Vivamus
        rutrum lorem in felis lacinia vulputate. Phasellus sit amet nulla ut sem laoreet placerat ac
        tristique enim. Fusce facilisis semper nibh, quis egestas mi varius vel. Aenean eget sodales
        justo. Curabitur ut imperdiet justo. Integer sed sem sem.
      </p>
      {alert}
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis at risus
        mattis tempus. Ut quis turpis vulputate, venenatis urna vel, vulputate sem. Suspendisse
        fringilla mi sed ante dictum ullamcorper. Pellentesque sed neque eu quam posuere pretium.
        Sed eu facilisis nulla, eget vestibulum purus. Duis molestie at nibh sit amet scelerisque.
        Donec imperdiet lacus at elit dapibus dignissim. In at rutrum metus. Curabitur vitae
        consequat risus. Nulla quam enim, vehicula eget congue ac, laoreet eu mauris. Fusce congue,
        nisl quis lacinia elementum, ante quam sagittis ipsum, volutpat eleifend nisl sem aliquet
        quam. Nunc nec ipsum ac augue hendrerit fringilla mattis in ex.
      </p>
      <p>
        Nam eu mollis lectus. Pellentesque euismod est id suscipit aliquet. Nam pulvinar cursus
        orci, in feugiat elit fringilla ac. Donec finibus ante ac lorem hendrerit lobortis.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Suspendisse viverra ipsum orci, vulputate egestas diam ullamcorper ac. Quisque at
        mi vitae ipsum elementum commodo.
      </p>
      <h5>H5: {header}</h5>
      {alert}
      <p>
        Sed a orci et lorem feugiat facilisis eget tristique tellus. Quisque quis eros lectus. Proin
        viverra, risus laoreet vulputate fringilla, quam risus rhoncus lacus, rutrum iaculis mi eros
        vel ex. Quisque sed dictum nunc. Nam pretium orci at interdum ultrices. Suspendisse faucibus
        justo eget mi varius tristique. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Proin quis magna iaculis, aliquet ligula sit amet, fringilla
        leo. Vestibulum aliquet mi nec velit mollis, quis rutrum massa tincidunt. Morbi bibendum
        erat non orci feugiat, quis pretium magna vestibulum.
      </p>
      {alert}
      <h6>H6: {header}</h6>
      <p>
        Etiam venenatis ligula ante, sed efficitur metus tristique vitae. Donec at tempor quam,
        cursus rhoncus nisl. Ut feugiat lorem eu iaculis placerat. Etiam faucibus nunc et nulla
        posuere sagittis. Praesent non maximus magna. Morbi ultrices, sem in ullamcorper porta, ante
        mi pretium justo, vitae pellentesque dui quam eget enim. Aenean velit orci, dignissim a
        purus sit amet, interdum efficitur erat.
      </p>
      {alert}
    </div>
  );
};
