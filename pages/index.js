
export async function getStaticProps() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Erro!');
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      users,
    },
  };
}

export default function Home(props) {
  const { users } = props;

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}