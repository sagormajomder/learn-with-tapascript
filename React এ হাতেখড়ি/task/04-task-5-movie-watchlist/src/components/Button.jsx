function Button({ type, style, children, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-2 rounded-sm cursor-pointer font-bold ${style}`}>
      {children}
    </button>
  );
}

export default Button;
