function Container({ children }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "50%",
          margin: "30px",
        }}
      >
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}
export default Container;
