// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Home = () => {

  return (
    <Container>
      <h1>Home</h1>
      <Link to={`/user/${12}`}>
        <h3>User 18</h3>
      </Link>
      <Link to={`/user/${18}`}>
        <h3>User 18</h3>
      </Link>
    </Container>

  );
}

// export const Home = () => {
//   //mapper les utilisateurs depuis les data pour créer une liste de link en fonction de ça = rendre ça dynamique.
//   const [users, setUsers] = useState({}); //est-ce que je dois utiliser un usestate ? ou plutôt le résultat d'un fetch
//   const [targetAPI, setTargetAPI] = useState(false); //est-ce que je dois utiliser un usestate ? ou plutôt le résultat d'un fetch

//   
//   useEffect(() => { }, []);
//   return (
//     <Container>
//       <h1>Home</h1>
//       <div>
//         {users && (users.map((e, i) =>
//           <Link key={i} to={`/user/${e.id}`}>
//             <h3>{e.id}</h3>
//           </Link>
//         ))}
//       </div>
//       <div>
//           <button onClick={() => {setTargetAPI(!targetAPI)}}>{targetIsAPI ? 'Appel API' : 'Appel Mocké'}</button>
//       </div>
//     </Container>

//   );
// }

const Container = styled.div`
  margin-inline: 7rem;
  margin-block: 4rem;
  `