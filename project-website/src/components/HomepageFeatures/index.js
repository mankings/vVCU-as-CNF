import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Orientadores = [
  {},{
    title: 'Rafael Direito',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Advisor
      </>
    ),
  },
  {
    title: 'João Almeida',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Advisor
      </>
    ),
  },{}
];

const Alunos1 = [
  {
    title: 'Raquel Paradinha',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Team Manager
      </>
    ),
  },
  {
    title: 'Miguel Matos',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        DevOps Master
      </>
    ),
  },
  {
    title: 'Tiago Sora',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Architect
      </>
    ),
  },{
    title: 'Filipe Antão',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Productor Owner
      </>
    ),
  },
  {
    title: 'Paulo Pinto',
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Existence
      </>
    ),
  }
];



function View6({image, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
function View4({image, title, description}) {
  return (
    <div className={clsx('col mx-1 bg-success')}>
      <div className="text--center">
        <img src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {Orientadores.map((props, idx) => (
            <View6 key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {Alunos1.map((props, idx) => (
            <View4 key={idx} {...props} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
