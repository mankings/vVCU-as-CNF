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
    margin:"1000px",
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Team Manager
      </>
    ),
  },
  {
    title: 'Miguel Matos',
    margin:"100px",
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        DevOps Master
      </>
    ),
  },
  {
    title: 'Tiago Sora',
    margin:"100px",
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Architect
      </>
    ),
  },{
    title: 'Filipe Antão',
    margin:"100px",
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Productor Owner
      </>
    ),
  },
  {
    title: 'Paulo Pinto',
    margin:"100px",
    image : require('@site/static/img/paradinha.png').default,
    description: (
      <>
        Existence
      </>
    ),
  }
];

function ViewO({image, title, description}) {
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
function ViewA({image, title, description}) {
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
            <ViewO key={idx} {...props} />
          ))}
        </div>
        <div className="row d-flex justify-content-center" style={{marginTop:"30px"}}>
          {Alunos1.map((props, idx) => (
            <ViewA key={idx} {...props} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
