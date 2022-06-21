import data, { Source } from '../data';

import styles from './index.module.less';

const Component = () => {
  const renderMenu = (data: Source) => {};

  const renderSource = (data: Source) => {};

  const renderContent = (data: Source[]) => {
    const dfs = (data: Source[], dep?: number) => {
      return data.map((item) => {
        if (dep === 0) {
          return renderMenu(item);
        }
        if (dep === 1) {
          return renderSource(item);
        }
      });
    };
    return dfs(data, 0);
  };

  return <div className={styles.container}></div>;
};

export default Component;
