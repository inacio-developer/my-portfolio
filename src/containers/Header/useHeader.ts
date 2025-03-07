import { useState } from 'react';
import PDF from '../../assets/archives/cv-Rafael-Inacio.docx.pdf';
const useHeader = () => {
  const [copy, setCopy] = useState(false);
  const handleCopyText = (c: React.MouseEvent) => {
    c.preventDefault();
    setCopy(true);
    const email: string = 'rafaelinacio.contato@gmail.com';
    window.location.href = 'mailto:' + email;
    navigator.clipboard.writeText(email);
    setTimeout(() => setCopy(false), 2000);
  };
  const redirectWpp = () => {
    window.open('https://wa.me/5531994557852', '_blank');
  };
  const openCV = () => {
    const a = document.createElement('a');
    a.href = PDF;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  };
  return { copy, handleCopyText, redirectWpp, openCV };
};
export { useHeader };
