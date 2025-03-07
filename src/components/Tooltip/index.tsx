import * as S from './styles';

type TooltipProps = {
  content: string;
  keyboard?: string;
};

const Tooltip = ({ content, keyboard }: TooltipProps): JSX.Element => (
  <S.Tooltip className="tooltip">
    {content}
    {keyboard && (
      <S.Key>
        <div>{keyboard}</div>
      </S.Key>
    )}
  </S.Tooltip>
);

export { Tooltip };
