import { Link } from "react-router-dom";
import Button_Primary from "./shared/Button_Primary";

const Offers = () => {
  return (
    <div
      className="w-full md:h-[600px] bg-cover bg-center mt-16"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHG_8BVjDaCN1kJQEl-sL8VAHOVq7qxPCaA&s")`,
      }}
    >
      <div className=" bg-black/60 h-full">
        <div className="w-11/12 md:w-8/12 mx-auto flex md:flex-row flex-col-reverse gap-6 items-center justify-center py-6 md:py-0">
          {/* text content here */}
          <div className="flex-1">
            <h4 className="text-3xl md:text-6xl text-white italic">Delicious</h4>
            <h3 className="text-4xl md:text-6xl my-3 font-medium text-white uppercase">
              Special deal offer <br />
              for this week
            </h3>
            <p className="text-white text-sm">
              Restaurant, where culinary excellence meets warm hospitality in
              every dish we serve nestled in the heart of city
            </p>
            <Link to="food/67e79bd067dda4f5adbe3f0f">
              <Button_Primary text="Order Now"></Button_Primary>
            </Link>
          </div>
          {/* image here */}
          <div className="flex-1 md:mt-16">
            <img
              className="w-full bg-transparent"
              src="https://demo.bravisthemes.com/wellfood/wp-content/uploads/2025/01/img-ss4-h1-747x640.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
