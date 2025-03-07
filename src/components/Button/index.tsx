import * as S from './styles';

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  width: string;
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
  classStyle?: string;
  disabled?: boolean;
};

const Button = ({
  text,
  icon,
  width,
  clickEvent,
  classStyle,
  disabled,
}: ButtonProps): JSX.Element => (
  <S.Button
    onClick={clickEvent}
    $width={width}
    className={classStyle}
    disabled={disabled}
  >
    <span>{text}</span> {icon}
  </S.Button>
);

export { Button };
