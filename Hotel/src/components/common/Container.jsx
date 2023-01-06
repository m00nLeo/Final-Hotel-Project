const Container = ({ fluid = false, children }) => {
  return (
    <div className={fluid ? "mx-auto px-4" : "mx-auto  max-w-screen-xl px-4"}>
      {children}
    </div>
  );
};

export default Container;
