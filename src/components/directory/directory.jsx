import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Thrillers",
          imageUrl: "https://i.ibb.co/8NXxrL5/portfolio3.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "Romance",
          imageUrl: "https://i.ibb.co/BqhpVDq/03.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Mysteries",
          imageUrl: "https://i.ibb.co/TLdxMCk/portfolio4.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Science",
          imageUrl: "https://i.ibb.co/XkCsHJR/01-1.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Children",
          imageUrl: "https://i.ibb.co/QXQTN5M/02.jpg",
          size: "large",
          id: 5,
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
