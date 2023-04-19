import Payment from "./Payment";
import Shipping from "./Shipping";
import Information from "./Information";

const ProductsTabs = ({ tab }) => {
  const renderRouteSwitch = () => {
    switch (tab) {
      case "Shipping":
        return <Shipping value={tab} />;
      case "Payment":
        return <Payment value={tab} />;
      default:
        return <Information value={tab} />;
    }
  };
  return <>{renderRouteSwitch()}</>;
};

export default ProductsTabs;
