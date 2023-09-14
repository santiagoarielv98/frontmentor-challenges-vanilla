import { useSelector } from "react-redux";

const SampleComponent = () => {
  const data = useSelector((state) => state.test.data);

  return <div>Data from Redux: {data}</div>;
};

export default SampleComponent;
