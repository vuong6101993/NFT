import en from '@/locales/en';
import ja from '@/locales/ja';
import { useRouter } from 'next/router';

const useTranslation = () => {
  let { locale } = useRouter();
  const trans = locale === 'ja' ? ja : en
  return trans
}

export default useTranslation;
