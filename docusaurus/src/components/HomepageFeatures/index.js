import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blueprint-First Approach',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Project Blueprint lets you skip static documentation and start designing dynamic systems from day one. Create living documents that evolve with your teams.
      </>
    ),
  },
  {
    title: 'Focus on Structure, Not Syntax',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Forget about formatting and scattered notes. With Doqario, you can focus on structuring knowledge while we automate consistency, validation, and compliance.
      </>
    ),
  },
  {
    title: ' AI-Driven and Future-Ready',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend your documentation into applications, workflows, and validations — all powered by AI. Doqario helps your internal knowledge scale as fast as your organization grows.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
