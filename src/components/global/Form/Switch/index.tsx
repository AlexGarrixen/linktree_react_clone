import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SwitchRoot, Indicator } from './styled';

export type SwitchProps = {
  onSwitch?: (isEnabled: boolean) => void;
  className?: string;
  colorScheme?: 'primary' | 'success';
  isEnabled?: boolean;
};

const Switch = ({
  onSwitch,
  isEnabled = false,
  colorScheme = 'primary',
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(isEnabled);
  const handleSwitch = useCallback(() => setEnabled(!enabled), [enabled]);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) onSwitch && onSwitch(enabled);
    mounted.current = true;
  }, [enabled, mounted.current]);

  return (
    <SwitchRoot
      {...rest}
      onClick={handleSwitch}
      colorScheme={colorScheme}
      isEnabled={enabled}
    >
      <Indicator />
    </SwitchRoot>
  );
};

export default Switch;
