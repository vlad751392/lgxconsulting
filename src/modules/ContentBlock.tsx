type ContentBlockProps = {
  imgPosition: "left" | "right";
  img: string;
  imgWidth: number
  imgHeight: number
  children: React.ReactNode;
};

export const ContentBlock = (props: ContentBlockProps) => {
  return (
    <article className="container xl:max-w-[1245px] my-7">
        <section
          className={`flex ${
            props.imgPosition === "right"
              ? "md:flex-row-reverse flex-col"
              : "md:flex-row flex-col"
          }  gap-[30px] items-center justify-between 
          `}
        >
          <div className="md:w-2/4 w-3/4 pb-5 sm:pb-0 flex justify-center">
          <img
            className={` `}
            width={props.imgHeight}
            height={props.imgHeight}
            src={props.img}
            alt="Icon"
          />
          </div>
          <div className="md:w-2/4 flex justify-center sm:justify-normal">
          {props.children}
          </div>
        </section>
    </article>
  );
};
