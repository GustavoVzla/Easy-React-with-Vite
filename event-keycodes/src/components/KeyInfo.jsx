import "../styles/KeyInfo.css";

const KeyInfo = ({ label, value, backgroundColor }) => {
  const style = backgroundColor ? { backgroundColor } : {};
  
  return (
    <div className="key" style={style}>
      {value || "Press any key"}
      <small>{label}</small>
    </div>
  );
};

export default KeyInfo;
