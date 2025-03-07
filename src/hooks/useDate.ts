const useDate = () => {
  const date = (pubDate: string) => pubDate.split('-');
  const months: string[] = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const dateShort = (pubDate: string): string => {
    const [year, months, day] = date(pubDate);
    const dayAndHours = day.split(' ');

    return `${dayAndHours[0]}/${months}/${year}`;
  };

  const monthPerExtense = (pubDate: string): string => {
    const [year, month, day] = date(pubDate);
    const dayAndHours = day.split(' ');
    return `${dayAndHours[0]} de ${months[parseInt(month) - 1]}, ${year}`;
  };

  const dateAndHours = (pubDate: string): string => {
    const [year, month, day] = date(pubDate);
    const dayAndHours = day.split(' ');
    return `${dayAndHours[1]} — ${dayAndHours[0]} de ${months[parseInt(month) - 1].slice(0, 3)}., ${year}`;
  };

  return { dateShort, monthPerExtense, dateAndHours };
};

export { useDate };
