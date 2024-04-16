import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
