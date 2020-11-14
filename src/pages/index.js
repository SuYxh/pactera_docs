import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'HTML规范',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        基于W3C、苹果开发者等官方文档，并结合团队日常业务需求以及团队在日常开发过程中总结提炼出的经验而约定。
      </>
    ),
  },
  {
    title: 'CSS规范',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        统一团队 CSS 代码书写和 SASS 预编译语言的语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。
      </>
    ),
  },
  {
    title: 'JavaScript规范',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        统一团队的 JS 语法风格和书写习惯，减少程序出错的概率，其中也包含了 ES6 的语法规范和最佳实践。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/regulation/code')}>
              前端开发规范
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
