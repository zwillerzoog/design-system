import { SvgIcon } from '@cmsgov/design-system';
import { IconCommonProps } from '@cmsgov/design-system/dist/components/Icons/SvgIcon';

const defaultProps = {
  className: '',
  title: 'Information',
  viewBox: '0 0 18 18',
};

function InfoCircleOutlineIcon(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--info-circle-outline ${props.className || ''}`;

  return (
    <span className="icon-wrapper">
      <SvgIcon {...defaultProps} {...props} className={iconCssClasses}>
        <g fill="currentColor" fillRule="nonzero">
          <path d="M9,0 C4.02978629,0 0,4.0312379 0,9 C0,13.9716653 4.02978629,18 9,18 C13.9702137,18 18,13.9716653 18,9 C18,4.0312379 13.9702137,0 9,0 Z M9,16.2580645 C4.98875806,16.2580645 1.74193548,13.0125847 1.74193548,9 C1.74193548,4.99010081 4.98890323,1.74193548 9,1.74193548 C13.009754,1.74193548 16.2580645,4.98886694 16.2580645,9 C16.2580645,13.0111694 13.0125847,16.2580645 9,16.2580645 Z M9,3.99193548 C9.84179032,3.99193548 10.5241935,4.67433871 10.5241935,5.51612903 C10.5241935,6.35791935 9.84179032,7.04032258 9,7.04032258 C8.15820968,7.04032258 7.47580645,6.35791935 7.47580645,5.51612903 C7.47580645,4.67433871 8.15820968,3.99193548 9,3.99193548 Z M11.0322581,13.2096774 C11.0322581,13.4501734 10.8372702,13.6451613 10.5967742,13.6451613 L7.40322581,13.6451613 C7.16272984,13.6451613 6.96774194,13.4501734 6.96774194,13.2096774 L6.96774194,12.3387097 C6.96774194,12.0982137 7.16272984,11.9032258 7.40322581,11.9032258 L7.83870968,11.9032258 L7.83870968,9.58064516 L7.40322581,9.58064516 C7.16272984,9.58064516 6.96774194,9.38565726 6.96774194,9.14516129 L6.96774194,8.27419355 C6.96774194,8.03369758 7.16272984,7.83870968 7.40322581,7.83870968 L9.72580645,7.83870968 C9.96630242,7.83870968 10.1612903,8.03369758 10.1612903,8.27419355 L10.1612903,11.9032258 L10.5967742,11.9032258 C10.8372702,11.9032258 11.0322581,12.0982137 11.0322581,12.3387097 L11.0322581,13.2096774 Z" />
        </g>
      </SvgIcon>
    </span>
  );
}

export default InfoCircleOutlineIcon;
