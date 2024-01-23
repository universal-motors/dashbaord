import ImageUpload from "./component/imageUpload";
import Uploads from "./component/uploads";

export default function Home() {
  return (
    <div className="bg-[#fafafb] w-[100%]  h-[100%]">
      <div>
        <ImageUpload />
        <Uploads />
      </div>

    </div>
  );
}
