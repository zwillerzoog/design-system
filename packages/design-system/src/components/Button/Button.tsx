import React from 'react';
import classNames from 'classnames';

export type CustomButtonComponentType = React.ComponentType<any> | React.FC;
export type ButtonComponentType = React.ElementType<any> | CustomButtonComponentType;
export type ButtonSize = 'small' | 'big';
export type ButtonType = 'button' | 'submit';
/**
 * A string corresponding to the button-component variation classes.
 * The danger variation is deprecated and will be removed in a future release.
 */
export type ButtonVariation = 'primary' | 'danger' | 'success' | 'transparent';

type DetermineButtonComponentType<Props extends { component: unknown }> = Props extends {
  component: CustomButtonComponentType;
}
  ? CustomButtonComponentType
  : Props extends { href: string }
  ? 'a'
  : Props['component'];

type CommonButtonProps = {
  /**
   * Label text or HTML
   */
  children: string | React.ReactNode;
  /**
   * Additional classes to be added to the root button element.
   * Useful for adding utility classes.
   */
  className?: string;
  /**
   * When provided, this will render the passed in component. This is useful when
   * integrating with React Router's `<Link>` or using your own custom component.
   */
  component: ButtonComponentType;
  disabled?: boolean;
  /**
   * When provided the root component will render as an `<a>` element
   * rather than `button`.
   */
  href?: string; // Still optional because it's optional on the anchor tag
  /**
   * Access a reference to the `button` or `a` element
   */
  inputRef?: (...args: any[]) => any;
  /**
   * @hide-prop [Deprecated] Use inversed instead
   */
  inverse?: boolean;
  /** Applies the inverse theme styling */
  inversed?: boolean;
  /**
   * Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).
   * Not called when the button is disabled.
   */
  onClick?: (...args: any[]) => any;
  size?: ButtonSize;
  /**
   * Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute
   */
  type?: ButtonType;
  /**
   * A string corresponding to the button-component variation classes.
   * The `'danger'` variation is deprecated and will be removed in a future release.
   */
  variation?: ButtonVariation;
};

type OmitProps = 'children' | 'className' | 'onClick' | 'ref' | 'size' | 'type' | 'href';

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<C extends React.ElementType, Props = {}> = ExtendableProps<
  PropsOf<C>,
  Props
>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritableElementProps<C, Props>;

export type ButtonProps<P extends CommonButtonProps> = PolymorphicComponentProps<
  DetermineButtonComponentType<P>,
  CommonButtonProps
>;

export const Button = <T extends CommonButtonProps>(props: ButtonProps<T>) => {
  if (process.env.NODE_ENV !== 'production') {
    if (props.inverse) {
      console.warn(
        `[Deprecated]: Please remove the 'inverse' prop in <Button>, use 'inversed' instead. This prop has been renamed and will be removed in a future release.`
      );
    }
    if (props.variation === 'danger') {
      console.warn(
        `[Deprecated]: Please remove the 'danger' variation prop in <Button>. This prop has will be removed in a future release.`
      );
    }
  }

  function handleClick(e: React.MouseEvent | React.KeyboardEvent): void {
    if (!props.disabled && props.onClick) {
      props.onClick(e);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent): void {
    // Trigger onClick on space key event for `<a>` elements
    if (e.key === ' ') {
      handleClick(e);
    }
  }

  /**
   * Since any number of arbitrary props can be passed into this component, we
   * use a destructuring assignment to get only the props we want to pass to the
   * rendered HTML element. For example, the "variation" prop is used to generate
   * the classNames, but doesn't need to be passed to the rendered component, so
   * we omit it here so that it's not included in the props object.
   */
  const {
    className,
    component,
    inputRef,
    inversed,
    inverse,
    onClick,
    size,
    variation,
    ...otherProps
  } = props;

  let ComponentType = component;
  // If props.component is 'button', it is not a custom React component. In cases
  // where the user didn't specify a custom component and did include an href, we
  // want to use `<a>` for our element.
  if (ComponentType === 'button' && props.href) {
    // Need to assert any for TypeScript because T is technically 'button'
    ComponentType = 'a' as any;
  }

  const variationClass = variation && `ds-c-button--${variation}`;
  const disabledClass = props.disabled && ComponentType !== 'button' && 'ds-c-button--disabled';
  const sizeClass = size && `ds-c-button--${size}`;
  const inverseClass = (inversed || inverse) && 'ds-c-button--inverse';
  const allClassNames = classNames(
    'ds-c-button',
    disabledClass,
    variationClass,
    inverseClass,
    sizeClass,
    className
  );

  const attrs: any = {
    className: allClassNames,
    ...otherProps,
  };

  if (props.onClick) {
    attrs.onClick = handleClick;
  }

  if (component !== 'button' || props.href) {
    // Assume `component` is not a <button> and remove <button> specific attributes
    attrs.role = 'button';
    delete attrs.disabled;
    delete attrs.type;
  }

  return (
    <ComponentType
      ref={inputRef}
      onKeyPress={ComponentType === 'a' ? handleKeyPress : undefined}
      {...attrs}
    >
      {props.children}
    </ComponentType>
  );
};

Button.defaultProps = {
  type: 'button',
  component: 'button',
};

export default Button;
