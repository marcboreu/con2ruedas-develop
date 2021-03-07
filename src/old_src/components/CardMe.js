import React, { useEffect, useState } from 'react';
import { Card, Icon, Button, Image, List, Label } from 'semantic-ui-react';
import './CardUnitary.css';
import '../data/cards.json';

export const CardMe = () => {


  const handleClickAuthor = () => {
    console.log("click Author");
  }

  const handleClickCategory = () => {
    console.log("click Category");
  }
  const handleClickShare = () => {
    console.log("click Share");
  }
  
  const handleClickTypeCard = () => {
    console.log("click Type Card");
  }

  const handleClickCard = () => {
    console.log("click Card");
  }


  
    return (
        <Card>
          <Card>
        <Card.Content className="card-header-container">
                <List className="card-header" verticalAlign="middle" selection>
                    <List.Item className="card-header-li">
                      <Label 
                          className="category-card-label"
                          onClick={handleClickCategory}
                          color='red' horizontal
                        >
                        Categoria
                      </Label>
                    </List.Item>
                    <List.Item className="header-card-li">
                    <Button 
                          className="button-type-content-card"
                          onClick={handleClickTypeCard}
                          icon={<Icon 
                            className="icon-type-content-card"
                            name="content"
                            link/>}
                      />
                    </List.Item>    
                </List>
        </Card.Content>
        </Card>
            <Card
              className="card-card"
              onClick={handleClickCard}
              header='Title Card'
              meta='date'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              image="https://picsum.photos/300"
            />
            <Card.Content className="card-footer-container">
            <List className="card-footer" verticalAlign="middle" selection>
                    <List.Item className="card-footer-li">
                      <Label 
                          className="name-author-card"
                          onClick={handleClickAuthor}
                          horizontal
                      >
                      Author
                      </Label>
                    </List.Item>
                    <List.Item className="card-footer-li">
                      <Button 
                          className="button-share-card"
                          icon="share"
                          onClick={handleClickShare}
                        />
                    </List.Item>    
                </List>
        </Card.Content>
      </Card>
    )
}



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

// const obj = todos.map(( todo, index) => {
//   });
//   console.log(obj);
