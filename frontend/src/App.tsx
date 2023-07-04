import {useQuery, gql} from '@apollo/client';

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

type Book = {
  id: string;
  title: string;
};

type BooksData = {
  books: Book[];
};

const App = () => {
  const {loading, error, data} = useQuery<BooksData>(FETCH_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.books.map((book: Book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default App;
