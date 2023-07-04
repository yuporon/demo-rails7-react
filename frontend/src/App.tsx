import {useBooksQuery} from './graphql/generated';

const App = () => {
  const {data: {books = []} = {}, loading, error} = useBooksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default App;
