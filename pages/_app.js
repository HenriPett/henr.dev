import React from "react"
import "../styles/theme.css";
import "../styles/fluiditype.css";
import "../styles/styles.css";
import "../styles/equalizer.css";
import LoadingScreen from "../components/loadingScreen";

export default function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
