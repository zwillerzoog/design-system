import join from 'url-join';
import { withPrefix, navigate } from 'gatsby';
import { LocationInterface } from './graphQLTypes';

export function makeGithubUrl(pathname = '') {
  const ghUrl = 'https://github.com/CMSgov/design-system';
  return join(ghUrl, pathname);
}

const sketchBoardIds = {
  core: 'bffbfeb1-59a1-48dd-842f-a1e0566e457f',
  healthcare: '4da17849-4fab-4684-b2ef-fe63ba7ff10b',
  medicare: 'c242aee5-25e9-4684-ac7d-0f084ffeb782',
};

// creates links to sketch assets
// in sketch, we are using the art board in 'inspect' mode for each component
export function makeSketchUrl(pathname = '', theme) {
  const sketchUrl = 'https://www.sketch.com/s/';
  return join(sketchUrl, sketchBoardIds[theme], 'a', pathname, '#Inspect');
}

// creates links to storybook story
export function makeStorybookUrl(storyId, theme) {
  return withPrefix(`/storybook/?path=/story/${storyId}&globals=theme:${theme}`);
}

export function makePageUrl(fileRelativePath, location: LocationInterface) {
  return join('/', fileRelativePath.replace('.mdx', ''), '/', location.search);
}

const RE_PATH_THEME = /\/(healthcare|medicare|core)(((\?.*)?)|(\/?))$/;

export function getThemeFromPath(location: LocationInterface): string | undefined {
  console.log(location.pathname, RE_PATH_THEME.exec(location.pathname));
  const match = RE_PATH_THEME.exec(location.pathname);
  if (!match) return undefined;
  const [, theme] = match;
  return theme;

  // const tail = location.pathname.split('/').slice(-1)[0];
  // const themeMatch = themes.find(theme => {
  //   return tail === theme || tail?.startsWith(tail + '?') || tail?.startsWith()
  //   if (tail?.startsWith(theme)) {
  //     const extra = tail.charAt(theme.length);
  //     if (!extra || extra === "/" || extra === "?") return theme;
  //   }
  //   return false;
  // });
  // return themeMatch;
}

export function addThemePath(theme: string, reloadPage: boolean = false) {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.toString());
  url.pathname = url.pathname + (url.pathname.endsWith('/') ? theme : '/' + theme) + '/';

  navigate(url.toString(), { replace: !reloadPage });
  // if (reloadPage) {
  //   window.location.pathname = url.pathname;
  // } else {
  //   window.history.replaceState({}, '', url);
  // }
}
