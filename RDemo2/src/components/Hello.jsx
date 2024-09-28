const name = "const";

function demof() {
  return "demof";
}

function Hello({ name, msg, emoji, sno, person }) {
  //   function Hello(props)
  //   console.log(props);
  //   const { name, msg } = props;
  return (
    <div>
      <h1>
        Header h1 {name}
        {10 + 10}
        {demof()}
        {emoji}
        {/* {props.name} */}
        {name}
        {msg} {/* array */}
        {sno} {/* object */}
        {person.emoji}
      </h1>
      <h2>Header h2</h2>
    </div>
  );
}

export default Hello;

//props are immutable
