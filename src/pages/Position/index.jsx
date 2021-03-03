import Position from "./component/Position.jsx";
import data from "./data"; // 列表数据

const Index = () => {
  return (
    <>
      <Position data={data} time={800} />
    </>
  );
};

export default Index ;
