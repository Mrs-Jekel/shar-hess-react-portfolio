import React, { Component } from 'react';
import axios from 'axios';



export default class PortfolioDetail extends Component {
  constructor(props) {
      super(props)
    

      this.state = {
        PortfolioItem: {}
      };
      }

      componentWillMount() {
        this.getPortfolioItems();
      }
      
     
      getPortfolioItems() {
        axios.get(`https://sharhess.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug}`, 
          {withCredentials: true}
        ).then(response => {
          this.setState({
            PortfolioItem: response.data.portfolio_item
          })
        }).catch(error => {
          console.log("getPortfolioItems error", error)
        });
      }
  

  render() {
    const {
      name,
      description,
      url,
      category,
      thumb_image_url,
      banner_image_url,
      logo_url
    } = this.state.PortfolioItem;

      const bannerStyles = {
        backgroundImage: "url(" + banner_image_url + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      };

      const logoStyles = {
        width: "200px"
      }


      return (
          <div className ="portfolio-detail-wrapper">
            <div className="banner"style={bannerStyles}>
              <img src={logo_url} style={logoStyles} />
            </div>

            <div className ="portfolio-detail-description-wrapper">
              <div className="description">{description}</div>
            </div>
            <div className="bottom-content-wrapper">
              <a href={url} className="site-link" target="_blank">
                Visit {name}
              </a>
            </div>
          </div>
      );
  }
}