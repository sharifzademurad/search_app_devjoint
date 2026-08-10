import Card from './Card.jsx';

const ResultsList = ({ items = [] }) => {
  return (
    <div className="results-list" style={{ display: 'grid', gap: '16px' }}>
      {items.map((item) => (
        <Card key={item.id} title={item.title} description={item.body} />
      ))}
    </div>
  );
};

export default ResultsList;
