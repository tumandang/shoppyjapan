import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('TopBar');
  

  return (
    <div>
      
      <h1>{t('shortDesc')}</h1>
      
    </div>
  );
}