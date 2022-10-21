import { t } from '../i18n';
import SvgIcon, { IconCommonProps } from './SvgIcon';

const defaultProps = {
  className: '',
  viewBox: '27 0 160 135',
};

function WarningIcon(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--warning ${props.className || ''}`;

  return (
    <SvgIcon title={t('icons.warning')} {...defaultProps} {...props} className={iconCssClasses}>
      <path d="M179.695 125.388L117.126 10.673a10.39 10.39 0 00-3.832-3.992 10.1 10.1 0 00-5.295-1.467c-1.901 0-3.667.49-5.296 1.467s-2.906 2.308-3.829 3.992L36.303 125.388c-1.901 3.423-1.847 6.845.163 10.267a10.24 10.24 0 003.789 3.746 10.188 10.188 0 005.174 1.387H170.57c1.849 0 3.572-.463 5.175-1.387a10.24 10.24 0 003.789-3.746c2.01-3.423 2.064-6.844.161-10.267zm-61.265-8.148c0 .76-.259 1.398-.773 1.914-.516.516-1.127.773-1.834.773H100.18c-.706 0-1.317-.257-1.833-.773-.516-.517-.774-1.154-.774-1.914v-15.48c0-.76.258-1.397.774-1.914.516-.516 1.126-.773 1.833-.773h15.642c.707 0 1.318.257 1.834.773.515.517.773 1.154.773 1.914v15.48zm-.162-30.47c-.056.543-.341.991-.856 1.344-.517.354-1.154.529-1.915.529h-15.073c-.76 0-1.412-.176-1.955-.529-.544-.354-.815-.801-.815-1.346l-1.385-37.231c0-.761.272-1.331.815-1.711.706-.597 1.358-.896 1.956-.896h17.924c.598 0 1.25.298 1.956.896.543.38.813.896.813 1.548l-1.465 37.396z" />
    </SvgIcon>
  );
}

export default WarningIcon;
