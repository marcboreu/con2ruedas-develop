import React, {Component, Fragment, useEffect, useState } from 'react';
import { CardMe } from './components/CardMe';


//import ContainerExampleFluid from './components/ContainerExampleFluid';

// var deleteNewsletter = '<p><strong>SUSCR&Iacute;BETE GRATIS a&nbsp;<a href="https://www.motosan.es/" data-wpel-link="internal">Motosan.es</a>&nbsp;en la en la campanita, y DEJA TU OPINI&Oacute;N debajo en los comentarios</strong></p>';
// var ret = {content.rendered}.replace(/{dete}/g,''); 


// const getContent () => {

// }



const App = () => {



  // const url = `https://www.motosan.es/wp-json/wp/v2/posts`;
  // const [todos, setTodos] = useState();
  // const fetchApi = async () => {
  //     const response = await fetch(url);
  //     const responseJSON = await response.json();
  //     setTodos(responseJSON);
  // };

  // useEffect(() => {
  //   fetchApi();
  // },  )

  
  // const url = `https://www.motosan.es/wp-json/wp/v2/media`;
  const url = `https://www.motosan.es/wp-json/wp/v2/posts`;
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setTodos(responseJSON);
  };

  // useEffect(() => {
  //   fetchApi();
  // }, [todos] )

  return (
          <>
            <div>
                              <ul>
                                { !todos 
                                ? 'Cargando...'
                                : todos.map(( todo, index) => {
                                  const {title, content} = todo;
                                  return <li key={index}>        
                                          {/* <div id={index}>
                                            {(document.getElementById({index})).insertAdjacentHTML(' ', {content})}
                                          </div> */}
                                          {/* {(content.rendered).slice(0, -210)}  */}
                                          {/* <div dangerouslySetInnerHTML={{ __html: rendered}}/> */}
                                          {content.rendered}
                                          {console.log(todo)}
                                          
                                          
                                          </li>
                                })
                                }
                              </ul>
                            </div>
            </>
      )
}

export default App;
