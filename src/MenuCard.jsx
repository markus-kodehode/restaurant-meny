export default function MenuCard({
  data: { tittel, pris, ingredienser, kategori },
}) {
  return (
    <div className="dish">
      <h2>{tittel}</h2>
      <h3>{pris}</h3>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
}
