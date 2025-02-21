import Claim from './components/Claim/Claim';
import Layout from './components/Layout/Layout';
import Widget from './components/Widget/Widget';
import Advantages from './components/Advantages/Advantages';
import Metrics from './components/Metrics/Metrics';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Schema from './components/Schema/Schema';
import { LanguageContextProvider } from './Context/LanguageContext';

function App() {
  return (
    <LanguageContextProvider>
      <Layout>
        <Header />
        <Intro />
        <Widget />
        <Advantages />
        <Projects />
        <Metrics />
        <Schema />
        <Team />
        <Claim />
        <Footer />
      </Layout>
    </LanguageContextProvider>
  );
}

export default App;
