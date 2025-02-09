import Link from "next/link";
import { useRouter } from "next/router";

const ShopPage = () => {
  const router = useRouter();
  const { shopId } = router.query;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Westhill Barbers - {shopId?.toUpperCase()}</h1>
      <h2>Επιλέξτε:</h2>
      <Link href={`/shop/${shopId}/barbers`} passHref>
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "18px" }}>Μπαρμπέρη</button>
      </Link>
      <Link href={`/shop/${shopId}/services`} passHref>
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "18px" }}>Υπηρεσίες</button>
      </Link>
      <Link href={`/shop/${shopId}/booking`} passHref>
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "18px" }}>Κράτηση</button>
      </Link>
    </div>
  );
};

export default ShopPage;