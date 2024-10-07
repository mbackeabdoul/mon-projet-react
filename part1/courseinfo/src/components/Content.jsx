import Part from './Part';

const Content = ({ partie1, exercices1, partie2, exercices2, partie3, exercices3 }) => {
  return (
    <div>
      <Part nom={partie1} exercices={exercices1} />
      <Part nom={partie2} exercices={exercices2} />
      <Part nom={partie3} exercices={exercices3} />
    </div>
  );
};

export default Content;
