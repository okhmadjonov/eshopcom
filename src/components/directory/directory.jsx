import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          size: "large",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          size: "large",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          size: "large",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "kids",
          imageUrl: "https://i.ibb.co/pRK65XF/2.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSecionProps }) => (
          <MenuItem key={id} {...otherSecionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
