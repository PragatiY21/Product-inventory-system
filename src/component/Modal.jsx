const Modal = ({ title, children, onClose }) => {
    return (
      <div style={overlay}>
        <div style={modal}>
          <h3>{title}</h3>
          {children}
          <button onClick={onClose} style={{ marginTop: "10px" }}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  
  const modal = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px"
  };
  
  export default Modal;
  