'use client'
import ProductDetail from "@/views/productDetail";
import { usePathname } from "next/navigation";
const productDetailPage = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const productId = pathname?.split('/')?.pop();
  // const searchParams = useSearchParams();
  console.log('queryyyy   - ', productId);
  return (
  <ProductDetail id={productId}/>
  )
};
export default productDetailPage;
