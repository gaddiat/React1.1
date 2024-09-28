const Message = () => {
  const handleClick = () => {
    console.log("ouch");
  };
  return (
    <div>
      <button onClick={handleClick}>daba button ko</button>
    </div>
  );
};

export default Message;

//handleClick vs handleClick() called only when clicked vs called twice or when loads based on strict mode
