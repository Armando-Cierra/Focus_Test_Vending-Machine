import Menu from './components/Menu'
import Process from './components/Process'
import MobileNav from './components/MobileNav'

import './sass/index.scss';

export default function App() {

  return (
    <>
      <main className="container">
        <Menu/>
        <Process />
      </main>
      <MobileNav/>
    </>
  );
}
