import React from 'react';
import Navbar from "./Navbar";
import renderHTML from "react-render-html";
import Moment from "react-moment";
import Loader from "../loader.gif";
import axios from "axios";
import clientConfig from "../client-config";

class SinglePost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			post: {},
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/${this.props.id}` )
				.then( res => {

					if ( Object.keys( res.data ).length ) {
						this.setState( { loading: false, post: res.data } );
					} else {
						this.setState( { loading: false, error: 'No Posts Found' } );
					}
				} )
				.catch( err => this.setState( { loading: false, error: err.response.data.message } ) );
		} )
	}

	render() {

		const { loading, post, error } = this.state;
		const deleteContent = `<p><strong>SUSCR&Iacute;BETE GRATIS a <a href="https://www.motosan.es/" data-wpel-link="internal">Motosan.es</a> en la en la campanita, y DEJA TU OPINI&Oacute;N debajo en los comentarios</strong></p>`;
		const deleteContent2 = `<p>&iquest;Ya te&nbsp;<strong>SUSCRIBISTE GRATIS</strong>&nbsp;a&nbsp;<a href="https://www.motosan.es/" data-wpel-link="internal">Motosan.es</a>&nbsp;en la campana? Pues ahora deja&nbsp;<strong>TU OPINI&Oacute;N</strong>&nbsp;debajo en los comentarios</p>`;


		return(
			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ Object.keys( post ).length ? (
					<div className="mt-5 posts-container">
						<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
							<div className="card-header">
								{renderHTML( post.title.rendered )}
							</div>
							<div className="card-body">
								<div className="card-text post-content">{ renderHTML( (post.content.rendered).replace(deleteContent2, '') ) }</div>
							</div>
							{console.log(post)}
							<div className="card-footer"><Moment fromNow >{post.date}</Moment></div>
						</div>
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</React.Fragment>
		)
	}
}

export default SinglePost;
