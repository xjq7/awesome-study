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
        <div className={styles.content} key={title} id={title}>
          <div className={styles.title}>{title}</div>
          <div className={styles.sub_content}>
            {children?.map((o) => {
              const { title, desc = '', link = '' } = o;
              return (
                <div
                  className={styles.sub_content_item}
                  key={title}
                  onClick={() => {
                    window.open(link);
                  }}
                >
                  <div className={styles.sub_title}>{title}</div>
                  <div className={styles.sub_desc}>{desc}</div>
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
      <a
        href={`#${nav}`}
        className={classnames(
          styles.nav_item,
          selectNav === nav && styles.nav_item_select
        )}
        key={nav}
        onClick={() => setSelectNav(nav)}
      >
        {nav}
      </a>
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
