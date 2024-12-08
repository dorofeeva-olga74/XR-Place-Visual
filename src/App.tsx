import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Advantages from './components/Advantages/Advantages';
import Team from './components/Team/Team';

function App() {
  return (
    <>
      <Layout>
        <Widget />
        <Advantages />
        <Team />
        <Claim />
      </Layout>
    </>
  );
}

export default App;
