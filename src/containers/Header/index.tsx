import { useHeader } from './useHeader';
import { SocialNetworks } from '../../data/SocialNetworks';
import { List } from '../../components/List';
import { Button } from '../../components/Button';
import border from '../../assets/images/avatar-border.png';
import avatar from '../../assets/images/avatar.png';
import { SvgComponent as EmailSVG } from '../../assets/images/icons/contact-mail';
import { SvgComponent as WhatsappSVG } from '../../assets/images/icons/contact-wpp';
import { SvgComponent as DownloadSVG } from '../../assets/images/icons/CV-Download';
import * as S from './styles';

const Header = () => {
  const { copy, handleCopyText, redirectWpp, openCV } = useHeader();

  return (
    <S.Header>
      <S.Portrait>
        <img src={border} alt="border" />
        <S.Avatar src={avatar} alt="avatar" />
      </S.Portrait>
      <div>
        <S.Title className="title_header">Rafael Inácio</S.Title>
        <S.Subtitle className="subtitle_header">Desenvolvedor Web</S.Subtitle>
      </div>
      <div>
        <List
          list={SocialNetworks}
          direction="row"
          gap="5"
          transform="Bottom"
        />
      </div>
      <S.GridContact>
        <Button
          text={copy ? 'Pronto! E-mail copiado.' : 'E-mail'}
          icon={<EmailSVG />}
          width="100%"
          clickEvent={handleCopyText}
          classStyle={copy ? 'copySucess' : ''}
          disabled={copy ? true : false}
        />
        <S.Span>ou</S.Span>
        <Button
          text="WhatsApp"
          icon={<WhatsappSVG />}
          width="100%"
          clickEvent={redirectWpp}
        />
      </S.GridContact>
      <S.Div>
        <Button
          text="Visualizar CV"
          icon={<DownloadSVG />}
          width="100%"
          clickEvent={openCV}
        />
      </S.Div>
    </S.Header>
  );
};

export { Header };
