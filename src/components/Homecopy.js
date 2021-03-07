import React from 'react';
import Navbar from "./Navbar";
import axios from 'axios';
import Loader from "../loader.gif";
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import clientConfig from '../client-config';
import { Card, Icon, Button, Image, List, Label } from 'semantic-ui-react';

class Homecopy extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		  posts:[]
		}
	  }
	
	  componentDidMount = async () => {
		await axios.get(
		  'http://localhost/gutenberg-demo/wp-json/wp/v2/posts/?_embed'
		  ).then(post =>{
			this.setState({posts : post.data});
		  }).catch(error => {
			console.log(error);
		  });
	  }
	
	  removeTags = (str) => {
		  if ((str===null) || (str===''))
		  return false;
		  else
		  str = str.toString();
		  return str.replace( /(<([^>]+)>)/ig, '');
	   }
	
	  render(){
		return (
		   <div className="site-card-wrapper">
			<Row gutter={16}>
			{
			  this.state.posts.map(post=>
				<Link to={{ pathname: "/post", id: post.id }} key={post.id} >
				  <Col span={6} style={{ paddingTop: 50,paddingBottom:0,paddingRight:0,paddingLeft:50 }}>
					<Card
					  style={{ width: 380 }}
					  cover={
						<img
						  alt="example"
						  src={post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
						/>
					  }
					>
					  <Meta
						avatar={<Avatar src={post._embedded['author'][0].avatar_urls[24]} />}
						title={post.title.rendered}
						description={this.removeTags(post.excerpt.rendered)}
					  />
					</Card>
				  </Col>
				</Link>
			  )
			}
			</Row>
		  </div>
		);
	  }
	}

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			posts: [],
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?per_page=100` )
				.then( res => {
					if ( 200 === res.status ) {
						if ( res.data.length ) {
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		} )
	}


	render() {

		const { loading, posts, error } = this.state;
		return(

			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ posts.length ? (
					<div className="mt-5 posts-container">
						{ posts.map( ({id, title, excerpt, content, date, _links}) => (
									<Card  key={id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}> 
										<Card.Header>
											{/* <div>{console.log(post)}</div> */}
												<List className="card-header" verticalAlign="middle" selection>
													<List.Item className="card-header-li">
													<Label 
														className="category-card-label"
														onClick={this.handleClickLabel}
														color='red' horizontal>
														
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
										
													<div className="card-body">
														
															<div className="card-text post-title">
																{ renderHTML( title.rendered) }
															</div>
															<div className="card-text post-content">	
																{ renderHTML( excerpt.rendered ) }
																<Link to={`/post/${id}`} className="btn btn-secondary float-right" style={{ textDecoration: 'none' }}>
																	Leer más...
																</Link>	
															</div>
															
																{/* {
																_links.map( (link) => (

																	console.log(link)
																	) )
																} */}

																<div>
		{/* {console.log(JSON.stringify(_links))} */}
																</div>
																	
																
																
														
														
													</div>
										
										
										<Card.Header> 
										<List className="card-footer" verticalAlign="middle" selection>
													<List.Item className="card-footer-li">
													<Label 
														className="name-author-card"
														onClick={this.handleClickAuthor}
														horizontal
													>
														
													</Label>
													</List.Item>
													<List.Item className="card-footer-li">
													{/* <Button 
														className="button-share-card"
														icon="share"
														onClick={this.handleClickShare}
														/> */}
													<Moment fromNow >{date}</Moment>
													</List.Item>    
												</List>
										</Card.Header>
									</Card>
				) ) }
				
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</React.Fragment>
		);
	}
}

export default Homecopy;
