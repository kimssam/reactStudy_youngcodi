export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX입니다</p>
        <button className="button">버튼</button>
      </div>

      <style jsx>{`
        .container {
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 18px;
          margin: 8px;
          width:100%;
          position:relative;
        }
        .title {
          margin: 0;
          color: #aaa;
          text-align:left;
          margin-left:100px;
        }
        .button {
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;
          position:absolute;
          right:100px;
          top:10px;
        }
      `}</style>
    </>
  );
};
