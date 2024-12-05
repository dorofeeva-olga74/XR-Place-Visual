import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Team from './components/Team/Team';

function App() {
  return (
    <>
      <Layout>
        <Widget />
        <Team />
        <Claim />
      </Layout>
    </>
  );
}

export default App;
