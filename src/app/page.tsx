import Projetos from './content/projetos/projetos';
import Habilidades from './content/habilidades/habilidades';
import Navbar from './components/navbar/navbar';
import Contato from './content/contato/contato';
import Footer from './components/footer/footer';
import Sobre from './content/sobre/sobre';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]" style={{backgroundColor: '#1c1c1c'}}>
      
      <Navbar />

      <main className=" container mx-auto py-20 px-4 sm:px-6 lg:px-8">

        <Sobre />

        <Projetos />

        <Habilidades />

        <Contato />

      </main>
      
      <Footer />
    </div>
  );
}
