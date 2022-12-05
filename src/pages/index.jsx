import ImageCarousel from "../../components/carousel";
import { imgs } from "../../data/images";
export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <ImageCarousel images={imgs} />
    </div>
  );
}
