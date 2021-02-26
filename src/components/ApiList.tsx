import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { SearchApi } = useActions();
  const { data, loading } = useTypedSelector(
    (state) => state.apis
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    SearchApi(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {/* {error && <h3>{error}</h3>} */}
      {loading && <h3>Loading...</h3>}
      {data && (
     <div>
        <img src={data.sprites.front_default} alt=""/>
        {data.abilities.map(ability => {
          return <p>{ability.ability.name}</p>
        })}
     </div>
      )}
    </div>
  );
};

export default RepositoriesList;
