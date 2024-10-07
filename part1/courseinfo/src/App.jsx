import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const cours = 'Développement d\'applications Half Stack';
  const partie1 = 'Fondamentaux de React';
  const exercices1 = 10;
  const partie2 = 'Utiliser les props pour passer des données';
  const exercices2 = 7;
  const partie3 = 'État d\'un composant';
  const exercices3 = 14;

  return (
    <div>
      <Header cours={cours} />
      <Content 
        partie1={partie1} exercices1={exercices1} 
        partie2={partie2} exercices2={exercices2} 
        partie3={partie3} exercices3={exercices3} 
      />
      <Total exercices1={exercices1} exercices2={exercices2} exercices3={exercices3} />
    </div>
  );
}

export default App;
