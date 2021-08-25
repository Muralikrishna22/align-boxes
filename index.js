const Box = (props) => {
  const { className, boxName } = props;
  return <div className={className}>{boxName}</div>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="cards-container">
      <Box className="small-box box" boxName="Small" />
      <Box className="medium-box box" boxName="Medium" />
      <Box className="large-box box" boxName="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
