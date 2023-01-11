import colorTokens from 'design-system-tokens/src/tokens/color';
import findKey from 'lodash/findKey';
import {
  CoreTheme,
  CoreComponentTheme,
  HealthcareTheme,
  HealthcareComponentTheme,
  MedicareTheme,
  MedicareComponentTheme,
} from 'design-system-tokens/src/themes';

const themes = {
  core: { ...CoreTheme, components: CoreComponentTheme },
  healthcare: { ...HealthcareTheme, components: HealthcareComponentTheme },
  medicare: { ...MedicareTheme, components: MedicareComponentTheme },
};

export type ThemeName = keyof typeof themes;

export function getThemeColorValue(themeName: ThemeName, colorName: string): string {
  return String(themes[themeName].color[colorName]);
}

export function getThemeColorName(themeName: ThemeName, colorValue: string): string | undefined {
  return findKey(themes[themeName].color, (value) => String(value) === colorValue);
}

export function getComponentVariables(themeName: ThemeName, componentName: string) {
  return themes[themeName].components[componentName];
}

export function getSystemColorTokenFromValue(colorValue: string): string {
  return findKey(colorTokens, (value) => String(value) === colorValue);
}

export function getUsedSystemColors(themeName: ThemeName): string[] {
  const colors = new Map<string, boolean>();

  for (const colorValue of Object.values(themes[themeName].color)) {
    const name = getSystemColorTokenFromValue(String(colorValue));
    if (name) {
      colors.set(name, true);
    }
  }

  return Array.from(colors.keys());
}
