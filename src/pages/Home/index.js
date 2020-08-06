import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Uma realização do @grupolx em parceria com a @laliga, O BRAVO! vai fortalecer e profissionalizar o futebol de base no Brasil para que o país volte a revelar grandes talentos. O sonho de milhões de garotos vai se tornar realidade na Espanha."} />       

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} /> 

      <Footer/>
    </div>
  );
}

export default App;
