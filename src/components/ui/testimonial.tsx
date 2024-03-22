import { Star, StarHalf } from 'lucide-react';

type TestimonialsProps = {
  image: string;
  name: string;
  stars: number;
  comment: string;
};

const Stars = ({ stars }: { stars: number }) => {
  const floor = Math.floor(stars);
  const ceil = Math.ceil(stars);

  return (
    <div className="flex gap-1">
      {Array.from({ length: floor }, (_, index) => (
        <Star key={index} size={16} className="text-amber-500 fill-amber-500" />
      ))}
      {stars > floor && stars - floor >= 0.5 && (
        <StarHalf key={floor + 1} size={16} className="text-amber-500 fill-amber-500" />
      )}
    </div>
  );
};

const Testimonial = ({ image, name, stars, comment }: TestimonialsProps) => {
  return (
    <div className="p-1">
      <div className="py-5 px-5 rounded border border-primary drop-shadow bg-white">
        <div className="flex items-center mb-3">
          <div
            className="w-12 h-12 rounded-full bg-cover bg-center mr-3"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="flex flex-col">
            <div className="font-semibold mb-1">{name}</div>
            <div className="flex items-center">
              <Stars stars={stars} />
            </div>
          </div>
        </div>
        <p className="line-clamp-3">{comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;
