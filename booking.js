import { useRouter } from "next/router";
import { useEffect } from "react";

const BookingPage = () => {
  const router = useRouter();
  const { shopId } = router.query;
  const setmoreLinks = {
    peristeri: "https://westhill.setmore.com/",
    ilion: "https://westhillilion.setmore.com/",
    aigaleo: "https://westhill-aigaleo.setmore.com/",
  };

  useEffect(() => {
    if (shopId && setmoreLinks[shopId]) {
      window.location.href = setmoreLinks[shopId];
    }
  }, [shopId]);

  return <p>Μεταφορά στο σύστημα κρατήσεων...</p>;
};

export default BookingPage;