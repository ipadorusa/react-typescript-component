interface Props {
  children?: React.ReactNode;
  checked?: boolean;
  rest?: React.ReactNode;
}

const CheckBox = ({ children, checked, ...rest }: Props) => {
  <div>
    <label>
      <input type="checkbox" checked={checked} {...rest} />
      <div>{checked ? "체크됨" : "체크 안됨"}</div>
    </label>
    <span>{children}</span>
  </div>;
};

export default CheckBox;
