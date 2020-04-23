import * as React from 'react';

export interface AppProps {firstWord: string}

export const App = (props: AppProps) => {
  const { firstWord } = props;

  return (
    <div>
      {firstWord}
    </div>
  );
};
