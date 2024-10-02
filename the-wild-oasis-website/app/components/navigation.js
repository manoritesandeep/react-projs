import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/account">Your account</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
