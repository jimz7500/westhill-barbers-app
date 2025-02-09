import { useState } from "react";

const WaitingList = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ο ${name} προστέθηκε στη λίστα αναμονής.`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Λίστα Αναμονής</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Όνομα"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="tel"
          placeholder="Τηλέφωνο"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <button type="submit">Προσθήκη</button>
      </form>
    </div>
  );
};

export default WaitingList;