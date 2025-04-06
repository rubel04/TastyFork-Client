import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "aos/dist/aos.css";
import AOS from "aos";

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const images = [
    { src: "https://i.ibb.co.com/HfKqP42p/gallery-1.jpg" },
    { src: "https://i.ibb.co.com/Z1G4Lc9L/gallery-2.jpg" },
    { src: "https://i.ibb.co.com/50NvTqP/gallery-3.jpg" },
    { src: "https://i.ibb.co.com/600QVdct/gallery-4.jpg" },
    { src: "https://i.ibb.co.com/yxpkG3d/gallery-5.jpg" },
    { src: "https://i.ibb.co.com/QjtCJTNP/gallery-6.jpg" },
    { src: "https://i.ibb.co.com/mCXg5wdc/gallery-7.jpg" },
    { src: "https://i.ibb.co.com/tPxHsf2X/gallery-8.jpg" },
    { src: "https://i.ibb.co.com/6cqr4qnz/gallery-9.jpg" },
    { src: "https://i.ibb.co.com/RkNzckyq/gallery-10.jpg" },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-9/12 mx-auto">
      <div>
        <h2 className="text-4xl text-center font-bold my-12">Our Gallery</h2>
      </div>
      <div
        data-aos="flip-left"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {images.map((image) => (
          <div key={image}>
            <img
              className="w-full cursor-pointer transition-transform duration-300 hover:translate-2 rounded h-72 object-cover"
              onClick={() => setOpen(true)}
              src={image.src}
              alt=""
            />
          </div>
        ))}
      </div>
      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        slides={images}
        close={() => setOpen(false)}
      ></Lightbox>
    </div>
  );
};

export default Gallery;
