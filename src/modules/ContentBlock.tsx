type ContentBlockProps = {
  imgPosition: "left" | "right";
  img: string;
  children: React.ReactNode;
};

export const ContentBlock = (props: ContentBlockProps) => {
  return (
    <article className=" w-full px-[9vw]">
      <section className="w-full ">
        <section
          className={`flex ${
            props.imgPosition === "right"
              ? "flex-col-reverse xl1000:flex-row-reverse"
              : "flex-col xl1000:flex-row"
          }  gap-[30px]  justify-between 
          `}
        >
          <img
            className={` w-[100%] xl1000:w-[40vw] `}
            src={props.img}
            alt="Icon"
          />
          <div className="w-[100%] xl1000:w-[40%]">{props.children}</div>
        </section>
      </section>
    </article>
  );
};
