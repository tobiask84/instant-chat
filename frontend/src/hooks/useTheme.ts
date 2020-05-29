import { Theme } from '../containers/Settings/Settings.types';
import { useCallback } from 'react';

export default function useTheme(): {
  setThemeAttr: (theme: Theme) => void;
} {
  const setThemeAttr = useCallback((theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return { setThemeAttr };
}
