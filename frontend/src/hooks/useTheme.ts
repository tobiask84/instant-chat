import { Theme } from '../containers/Settings/Settings.types';

export default function useTheme(): {
  setThemeAttr: (theme: Theme) => void;
} {
  const setThemeAttr = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return { setThemeAttr };
}
