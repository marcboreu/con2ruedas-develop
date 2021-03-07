import React from 'react';
import { Card, Icon, Button, Image, List, Label } from 'semantic-ui-react';
import './CardUnitary.css';
import '../data/cards.json';



export const CardMee = () => {


  
    return (
      <>
            <div className="ui card">

                <div className="content">
                  <span class="date">Categoria</span>
                  <div className="right floated meta">
                    <i class="file alternate icon"></i>
                  </div>
                
                </div>

                <div className="image">
                  <img src="https://picsum.photos/300"/>
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">Joined in 2013</span>
                  </div>
                  <div className="description">
                    Kristy is an art director living in New York.
                  </div>
                </div>
                <div className="extra content">
                  <a className="ui basic red button">
                    <i className="user icon"></i>
                    22 Friends
                  </a>
                  <a className="right floated">
                    <i className="share icon"></i>
                    17 likes
                  </a>
                </div>
      </div>
    </>
    )
}
