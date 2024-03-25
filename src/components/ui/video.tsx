import { type VideoProps } from '@/lib/types';

const Video = ({ src }: VideoProps) => (
  <video controls className="w-full">
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default Video;
