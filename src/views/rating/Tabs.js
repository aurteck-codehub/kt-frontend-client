/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import FeaturedProducts from './FeaturedProducts';
import OutOfStockProduct from './OutOfStockProduct';
import InStockProduct from './InStockProduct';
import TotalOrders from './TotalOrders';

const ProductsTabs = ({ tab, setCurrentRowData, discountsList, setDiscountsList, setOpen }) => {
    const renderRouteSwitch = () => {
        switch (tab) {
            case 'outOfStockProduct':
                return <OutOfStockProduct value={tab} />;
            case 'inStockProduct':
                return <InStockProduct value={tab} />;
            case 'totalOrders':
                return <TotalOrders value={tab} />;
            default:
                return <FeaturedProducts discountsList={discountsList} setDiscountsList={setDiscountsList} setCurrentRowData={setCurrentRowData} setOpenEdit={setOpen} value={tab} />;
        }
    };
    return <>{renderRouteSwitch()}</>;
};

export default ProductsTabs;
