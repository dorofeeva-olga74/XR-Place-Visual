import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Advantages from './components/Advantages/Advantages';
import Metrics from './components/Metrics/Metrics';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Schema from './components/Schema/Schema';

function App() {
  return (
    <>
      <Layout>
        <Widget />
        <Advantages />
        <Projects />
        <Metrics />
        <Schema />
        <Team />
        <Claim />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
