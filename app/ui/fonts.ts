import { Inter, Roboto_Mono ,Lusitana} from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const roboto_mono = Roboto_Mono({
    subsets:['cyrillic'],
    weight: ['400','700']
});
export const lusitana = Lusitana({
    subsets:['latin'],
    weight: ['400','700']
});