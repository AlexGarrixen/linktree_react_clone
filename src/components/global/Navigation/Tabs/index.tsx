import React from 'react';
import { TabRoot, TabsBox, TabsRoot } from './styled';

export type TabsProps = {
  children?: React.ReactNode;
  onChangeTab?: (value: string | number, ev: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
  value?: number | string;
  colorScheme?: 'primary' | 'secondary';
  className?: string;
};

export type TabProps = {
  isActive?: boolean;
  children?: React.ReactNode;
} & Pick<
  TabsProps,
  'colorScheme' | 'onChangeTab' | 'size' | 'value' | 'className'
>;

const Tabs = ({
  children: childrenProp,
  onChangeTab,
  value,
  colorScheme = 'secondary',
  size,
  ...rest
}: TabsProps) => {
  let defaultValue = 0;

  const children = React.Children.map(childrenProp, (child: JSX.Element) => {
    const childValue = child.props.value || defaultValue;
    const isActive = childValue === value;
    defaultValue++;

    return React.cloneElement(child, {
      onChangeTab,
      value: childValue,
      isActive,
      colorScheme,
      size,
    });
  });

  return (
    <TabsRoot {...rest}>
      <TabsBox>{children}</TabsBox>
    </TabsRoot>
  );
};

export default Tabs;

export const Tab = ({
  value,
  onChangeTab,
  isActive,
  colorScheme,
  children,
  size,
  ...rest
}: TabProps) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (typeof onChangeTab === 'function') onChangeTab(value, e);
    },
    [onChangeTab, value]
  );

  return (
    <TabRoot
      {...rest}
      size={size}
      onClick={handleClick}
      isActive={isActive}
      colorScheme={colorScheme}
    >
      {children}
    </TabRoot>
  );
};
