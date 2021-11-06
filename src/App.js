import Header from "./Header";
import './styles/scss/styles.scss'
import Main from './Main'
import Footer from "./Footer";
import {useState} from 'react'


function App() {
  const [page, setPage] = useState(1);
  const IncreasePage = ()=> {
    setPage(page+1)
  }
  const DecreasePage = ()=> {
    setPage(page-1)
  }
  return (
    <>
      <Header/>
      <Main page={page}/>
      <Footer page={page} IncreasePage={() => IncreasePage} DecreasePage={() => DecreasePage}/>
    </>
  );
}

export default App;
