import Link from "next/link";

const Home = () => {
  const shops = [
    { id: "peristeri", name: "Westhill Barbers Peristeri" },
    { id: "ilion", name: "Westhill Barbers Ilion" },
    { id: "aigaleo", name: "Westhill Barbers Aigaleo" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Καλώς ήρθατε στο Westhill Barbers</h1>
      <h2>Επιλέξτε Κατάστημα:</h2>
      {shops.map((shop) => (
        <Link key={shop.id} href={`/shop/${shop.id}`} passHref>
          <button style={{ margin: "10px", padding: "10px 20px", fontSize: "18px" }}>
            {shop.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Home;