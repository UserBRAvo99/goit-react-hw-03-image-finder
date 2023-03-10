import { Rings } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loaderSpinner">
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Loader;
