import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function CoverPage() {
  return (
    <>
      <Helmet>
        <title>Rodgers Chayuga's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[960px] w-full bg-black-900 relative">
        <Img
          src="images/img_bg.png"
          alt="bg_one"
          className="justify-center h-[960px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
        <Img
          src="images/img_image_3.png"
          alt="imagethree_one"
          className="justify-center h-[766px] w-[56%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[40px]"
        />
      </div>
    </>
  );
}
