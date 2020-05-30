import React, { useEffect, useRef } from 'react';
import './FirstPage.css';

function FirstPage(props) {
  const timeOutRef = useRef();

  useEffect(() => {
    const id = setTimeout(() => {
      props.history.push('/initialmenu');
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  });

  const clearRedirect = () => {
    clearTimeout(timeOutRef.current);
    props.history.push('/initialmenu');
  }


  return (
    <div>
      <div id="welcome">Bem-vindo ao Centro de Sondagens de Santo Afonso.</div>
      <p>Se não for redirecionado automaticamente, clique
          <button
          id="autom-redirect"
          onClick={clearRedirect}><div id="p1">aqui</div>.
        </button>
      </p>
    </div>
  );
}

export default FirstPage;

