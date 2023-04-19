function getItems() {
  return {
    slider: [
      {
        id: 1,
        title: "Delivery On Time at your Door Step",
        slug: "/1",
        image: "https://picsum.photos/1200",
      },
      {
        id: 2,
        title: "Delivery On Time at your Door Step2",
        subtitle: "subtitle 2",
        slug: "/2",
        image: "https://picsum.photos/1200",
      },
      {
        id: 3,
        title: "Delivery On Time at your Door Step3",
        slug: "/3",
        image: "https://picsum.photos/1200",
      },
    ],
  };
}
export default function handler(req, res) {
  res.status(200).json(getItems());
}
