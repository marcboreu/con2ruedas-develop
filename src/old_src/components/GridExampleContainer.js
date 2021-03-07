import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import CardUnitary from './CardUnitary'


export const GridExampleContainer = () => {

  const url = `https://www.motosan.es/wp-json/wp/v2/posts`;
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, [])

        return (
                <Grid className="ui equal width grid">
                  <Grid.Row columns={4}>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        
                        <div>
                          <ul>
                            { !todos 
                            ? 'Cargando...'
                            : todos.map(( todo, index) => {
                              return <li key={index}>{todo.title}</li>
                            })
                            }
                          </ul>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={3}>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={5}>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                      <Grid.Column>
                        <CardUnitary/>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
        )
}

    // <Grid.Row columns={4}>
    // <Grid.Column mobile={16} tablet={8} computer={4}>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    // </Grid.Row>

    // <Grid.Row columns={5}>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //    <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
    //   <Grid.Column>
    //     <CardUnitary/>
    //   </Grid.Column>
//     // </Grid.Row>
//    {/* <Grid.Column mobile={16} tablet={8} computer={4}> */}
    
//  </Grid>

