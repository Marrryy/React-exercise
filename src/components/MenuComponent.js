import React, { Component } from 'react';
//import Dishdetail from './DishdetailComponent ';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {


  // renderDish(dish) {
  //   if (dish != null){
  //     return(
  //       <Card>
  //         <CardImg top src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //       );
  //     }
  //   else{
  //     return(
  //         <div></div>
  //     );
  //    }
  // }
  

    
  // renderDetail(dish) {
  //   if(dish!= null){
  //     console.log(dish.id)
  //     const detail = dish.comments.map((dishs)=>{
  //       return (
  //         <div key={dishs.id}>
  //           <p>{dishs.comment}</p>
  //           <p>-- {dishs.author}, {dishs.date}</p>
  //         </div>
  //       );
  //     });
  //     return(
  //       <div className="col-12 col-md-5">
  //         <Card>
  //           <CardTitle>Comments</CardTitle>
  //           {detail}
  //         </Card>
  //       </div>
  //     );
  //   }
  //   else
  //     return(
  //       <div></div>
  //     );
  // };

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log( this.state)
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        {/* <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.state.selectedDish)}
          </div> 
          {this.renderDetail(this.state.selectedDish)}
          <Dishdetail dishes={this.state.selectedDish} />
        </div>*/}
      </div>
    );
  }
};

export default Menu;