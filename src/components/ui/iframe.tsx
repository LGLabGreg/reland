import { type IframeProps } from '@/lib/types';

const Iframe = ({ src }: IframeProps) => <iframe className="w-full" src={src} allowFullScreen />;

export default Iframe;
