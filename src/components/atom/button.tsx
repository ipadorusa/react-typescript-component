import styles from "./button.module.scss";

interface Props {
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ disabled, children, onClick }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
