export const LockCmp = () => {
    return (
      <button
        // className="btn"
        style={{ backgroundColor: "transparent", border: "none", color: "white" }}
        onClick={() => {
          alert("Locked btn Clicked");
        }}
      >
        <i className="fa-solid fa-lock"></i>
      </button>
    );
  };
export   const UnlockCmp = () => {
    return (
      <button
        // className="btn"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
        onClick={() => {
          alert("Unlock btn Clicked");
        }}
      >
        <i className="fa-solid fa-lock-open"></i>
      </button>
    );
  };