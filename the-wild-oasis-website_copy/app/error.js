"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}

/*
// To redirect the user to the homepage in case of an error and when they click the "Try again" button
"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  const handleTryAgain = () => {
    // Redirect to the homepage
    router.push("/");
  };

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={handleTryAgain}
      >
        Try again
      </button>
    </main>
  );
}
*/
