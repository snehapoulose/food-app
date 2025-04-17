import Link from "next/link";

export default function Home() {
  return (
    <div>
       <h1> Welcome TO Meal Page Page</h1>
      <p><Link href="/meals">Meal</Link></p>
      <p><Link href="/meals/share">Meal Share</Link></p>
      <p><Link href="/community">Community</Link></p>
    </div>
  );
}
