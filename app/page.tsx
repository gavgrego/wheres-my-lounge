/* eslint-disable react/no-unescaped-entities */

import BaseLayout from "./layouts/base";

export default function Home() {
  return (
    <BaseLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Where's My Lounge?</h1>
        <p>Find an airport, then find what lounge can access.</p>
      </main>
    </BaseLayout>
  );
}
