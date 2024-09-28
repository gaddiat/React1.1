import Code from "./Code";
import Fruits from "./Fruits";
const ConditionalComponent = () => {
  //   const cc = true;
  //   if (cc) {
  //     return <h1>h1 bolte</h1>;
  //   } else {
  //     return (
  //       <div>
  //         <Code />
  //       </div>
  //     );
  //   }

  //   let msg;
  //   const cc = false;
  //   if (cc) {
  //     msg = <Code />;
  //   } else {
  //     msg = <h1>H1 bolte</h1>;
  //   }
  //   return msg;

  const cc = false;
  return cc ? <Code /> : <Fruits />;
};

export default ConditionalComponent;
