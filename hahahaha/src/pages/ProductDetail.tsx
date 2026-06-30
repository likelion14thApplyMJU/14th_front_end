import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // URL의 :id 값을 가져옴

  return <h1>상품 ID: {id}번 상세 페이지</h1>;
}

export default ProductDetail;