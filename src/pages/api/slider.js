import tempsrc from '../../assets/images/bannerImage2.png';
import babyCare from "../../assets/images/baby.png";
import drinks from "../../assets/images/drink.png";

function getItems() {
  return {
    slider: [
      {
        id: 1,
        title: "Delivery On Time at your Door Step",
        slug: "/products",
        image: tempsrc,
      },
      {
        id: 2,
        title: "Delicate care for your little ones: Discover our gentle baby essentials",
        subtitle: "subtitle 2",
        slug: "/category/5",
        image: babyCare,
      },
      {
        id: 3,
        title: "Chill out with our refreshing range of icy beverages!",
        slug: "/category/1",
        image: drinks,
      },
    ],
  };
}
export default function handler(req, res) {
  res.status(200).json(getItems());
}
