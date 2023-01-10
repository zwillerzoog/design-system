import { FileDescriptor } from './types';
import { flatten } from './utility';
import { writeFile } from './file';

/**
 * Some Sass variables are required to accomplish Sassy things like loops,
 * mixins and media queries. These variables cannot currently be mapped to
 * CSS custom properties without causing Sass or syntax errors.
 *
 * This list includes the variable names to be created for Sass implementation.
 * This list doesn't exclude these variables from being exported as CSS
 * custom properties.
 *
 * These values will have a direct sass variable -> value definition.
 */
const sassVariableList: string[] = [
  'grid-columns',
  'media-width-xs',
  'media-width-sm',
  'media-width-md',
  'media-width-lg',
  'media-width-xl',
  'spacer-1',
  'spacer-2',
  'spacer-3',
  'spacer-4',
  'spacer-5',
  'spacer-6',
  'spacer-7',
  'spacer-none',
  'spacer-half',
];

/**
 * Formats an object containing key/value token pairs as a single string containing
 * the formatted values ready to be written to a SCSS file, including line breaks
 *
 * @param items - The object containing the key/value pairs
 * @param prefix - The prefix to be appended to each key on export
 * @param formatter - A function which takes a key, value and returns a formatted key, value string
 * @param separator - The separator between the prefix and key
 * @returns A string which contains all formatted key/value pairs
 */
const formatTokensAsCssVars = (
  items: Record<string, any>,
  prefix: string,
  formatter: (name: string, value: string) => string,
  separator: string
): string => {
  let SCSS = '';
  Object.entries(items).forEach(([name, value]) => {
    // global objects in themes are not prefixed by the token type
    name = prefix === 'global' ? name : `${prefix}${separator}${name}`;
    SCSS += formatter(name, value);
  });
  return SCSS;
};

/**
 * Writes an SCSS file that maps a scss variable to token value
 *
 * @param filename - name of file to be created
 * @param file -  a single FileDescriptor item generated by getFileDescriptors
 * @param importedModule - module data
 * @param sep - separator string between prefix and key
 */
const writeSassLayout = (
  filename: string,
  file: FileDescriptor,
  importedModule: any,
  sep: string
) => {
  let tokenItems: Record<string, any>;
  let output = '';

  Object.entries(importedModule.default).forEach(([section]) => {
    tokenItems = flatten(importedModule.default[section]);
    // core requires !default for each style
    const defaultInclude = file.baseName.includes('core') ? ' !default' : '';

    output += formatTokensAsCssVars(
      tokenItems,
      section,
      (name, value) => {
        if (sassVariableList.includes(name)) {
          return `$${name}: ${value}${defaultInclude};\n`;
        }
        return '';
      },
      sep
    );
  });

  if (output.length > 0) {
    writeFile(filename, output);
  }
};

/**
 * Writes a .css file that maps a css variable to its value
 *
 * @param filename - name of file to be created
 * @param file -  a single FileDescriptor item generated by getFileDescriptors
 * @param importedModule - module data
 * @param sep - separator string between prefix and key
 */
const writeCssFile = (filename: string, importedModule: any, sep: string) => {
  let tokenItems: Record<string, any>;
  let output = '';

  Object.entries(importedModule.default).forEach(([section]) => {
    tokenItems = flatten(importedModule.default[section]);

    output += formatTokensAsCssVars(
      tokenItems,
      section,
      (name, value) => {
        return `--${name}: ${value};\n`;
      },
      sep
    );
  });

  writeFile(filename, output);
};

/**
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as Sass (layout) & CSS files
 *
 * @param fileDescriptors - An array of fileDescriptors generated by getFileDescriptors
 * @param outPath - The output path for the files
 * @returns An exit code based on success writing output
 */
export const exportCssVars = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  fileDescriptors.forEach((file) => {
    const importedModule = require(`${file.moduleImportName}`);
    // component files do not need a separator
    const sep = file.baseName.includes('component') ? '' : '-';

    const layoutFilename = `${outPath}/${file.baseName}-layout-tokens.scss`;
    const cssVarFilename = `${outPath}/${file.baseName}-theme.css`;
    writeSassLayout(layoutFilename, file, importedModule, sep);
    writeCssFile(cssVarFilename, importedModule, sep);
  });

  return 0;
};

export default exportCssVars;
