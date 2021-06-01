import db from "../db";

export default function leden({ leden }) {
  return (
    <ul>
      {leden.map((lid) => (
        <li key={lid.id}>{lid.naam}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const result = await db.select().table("leden");
  const leden = JSON.parse(JSON.stringify(result));
  return {
    props: {
      leden,
    },
  };
}
