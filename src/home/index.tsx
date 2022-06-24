import { useEffect, useMemo, useState } from 'react';
import data, { Source } from '../data';
import classnames from 'classnames';
import styles from './index.module.less';

const Component = () => {
  const nav = useMemo(() => data.map((o) => o.title), [data]);

  const [selectNav, setSelectNav] = useState<string>();
  const renderContent = () => {
    return data.map((o) => {
      const { title, children } = o;
      return (
        <div>
          <div>{title}</div>
          <div>
            {children?.map((o) => {
              const { title, desc, link } = o;
              return (
                <div>
                  <div>{title}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    setSelectNav(nav[0]);
  }, [nav]);

  const renderNav = (nav: string) => {
    return (
      <div
        className={classnames(
          styles.nav_item,
          selectNav === nav && styles.nav_item_select
        )}
        key={nav}
        onClick={() => setSelectNav(nav)}
      >
        {nav}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {nav.map((title: string) => renderNav(title))}
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default Component;
