class DsAlert extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    const stylesheet = document.createElement('link');
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://design.cms.gov/cdn/design-system/4.0.5/css/index.css"
    this.shadowRoot.appendChild(stylesheet);

    const heading = this.getAttribute('heading');
    const body = this.getAttribute('body');
    ReactDOM.render(React.createElement(DesignSystem.Alert, { heading, children: body }), mountPoint)
  }
}
customElements.define('ds-alert', DsAlert);
