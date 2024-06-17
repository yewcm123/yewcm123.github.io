interface Props {
  variant?: 'contained' | 'outlined';
  style?: {
    border?: string;
    color?: string;
    height?: string;
    radius?: string;
    width?: string;
    text?: string;
  };
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ variant, style, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={'button' + (variant ? ' ' + variant : '')}
      style={style}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
