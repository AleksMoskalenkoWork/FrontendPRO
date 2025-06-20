function Link(props) {
  return (
    <a
      href={props.href}
      value={props.value}
      aria-current={props.ariaCurrent}
      className={props.className}
    >
      {props.value}
    </a>
  );
}

export default Link;
