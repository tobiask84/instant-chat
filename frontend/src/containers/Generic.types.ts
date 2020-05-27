import { ReactNode } from 'react';

export enum TabId {
  chat,
  settings,
}

export type Tab = {
  id: TabId;
  label: string;
  component?: ReactNode;
};
