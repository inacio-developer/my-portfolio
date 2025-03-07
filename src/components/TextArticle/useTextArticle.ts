import { Feed } from '../../types/medium';
import { useAPIMedium } from '../../hooks/useAPIMedium';
import { useDate } from '../../hooks/useDate';
import parse from 'html-react-parser';
import errorImg from '../../assets/images/icons/articles-error.png';

const useTextArticle = () => {
  const { data } = useAPIMedium();
  const isData: Feed[] = data as Feed[];
  const { monthPerExtense } = useDate();
  let textConvert: string | Document = '';

  const articleFigure = (id: number): string => {
    const parser = new DOMParser();
    const text: string = (data as Feed[])[id - 1].description;
    let getFigure: string;
    textConvert = parser.parseFromString(text, 'text/html');

    const firstFigure = textConvert.querySelector('figure img');
    if (firstFigure) getFigure = firstFigure.getAttribute('src') as string;
    else getFigure = errorImg;

    textConvert.querySelectorAll('figure').forEach(figure => figure.remove());

    return getFigure;
  };

  const text = () => {
    const bodyText = parse(
      (textConvert as Document).body.outerHTML
        .replaceAll('<body>', '')
        .replaceAll('</body>', ''),
    );

    return bodyText;
  };

  return { isData, articleFigure, monthPerExtense, text };
};

export { useTextArticle };
