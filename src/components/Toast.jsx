
function Toast(props) {
    const {text, icon} = props;
    console.log(props);
  return (
    <p><span>&quot;</span> {icon} {text} <span>&quot;</span></p>
  );
}


export default Toast
