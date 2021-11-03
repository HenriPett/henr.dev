import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{"Henrique P."}</title>
      <link rel="icon" href="/code.png" />
      <link rel="apple-touch-icon" href="/code.png" />
      <meta name="title" content={"Henrique P."} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={"Henrique Pett"} />
      <meta
        name="theme-color"
        content="currentColor"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
};
export default Metadata;
