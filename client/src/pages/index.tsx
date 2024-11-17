export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center m-auto h-screen">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product?=1</code> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}
