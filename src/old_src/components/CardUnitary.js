import React from 'react';
import { Card, Icon, Button, Image, List, Label } from 'semantic-ui-react';
import './CardUnitary.css';
import '../data/cards.json';



class CardUnitary extends React.Component {



  render() {

      return (
      <Card>
        <Card.Header>
                <List className="card-header" verticalAlign="middle" selection>
                    <List.Item className="card-header-li">
                      <Label 
                          className="category-card-label"
                          onClick={this.handleClickLabel}
                          color='red' horizontal>
                        Categoria
                      </Label>
                    </List.Item>
                    <List.Item className="header-card-li">
                    <Button 
                          className="button-type-content-card"
                          onClick={this.handleClickIcon}
                          icon={<Icon 
                            className="icon-type-content-card"
                            name="content"
                            link/>}
                      />
                    </List.Item>    
                </List>
        </Card.Header>
          <Image fluid src="https://picsum.photos/300"></Image>
        <Card.Header>
          <List className="card-footer" verticalAlign="middle" selection>
                    <List.Item className="card-footer-li">
                      <Label 
                          className="name-author-card"
                          onClick={this.handleClickAuthor}
                          horizontal
                      >
                        Categoria
                      </Label>
                    </List.Item>
                    <List.Item className="card-footer-li">
                      <Button 
                          className="button-share-card"
                          icon="share"
                          onClick={this.handleClickShare}
                        />
                    </List.Item>    
                </List>
        </Card.Header>
      </Card>
      )
  }
}

export default CardUnitary