import { Clock3, MapPin } from "lucide-react";

export default function CareersSecond() {
  const careersData = [
    {
      category: "Marketing",
      title: "Marketing Executive",
      description:
        "We’re looking for a mid-level marketing expert to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Software Development",
      title: "Back-end Developer",
      description:
        "We’re looking for a junior Back-end Developer to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Product",
      title: "UI/UX Designer",
      description:
        "We’re looking for a senior UI/UX Designer to join our team ",
      location: "Remote Friendly",
      type: "Full-time",
    },
    {
      category: "Prodcuct",
      title: "Product Designer",
      description:
        "We’re looking for a mid-level Product Designer to join our team.",
      location: "Remote Friendly",
      type: "Full-time",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-36 md:pt-60 2xl:pt-[350px] ">
      <div className="2xl:max-w-[1700px] mx-auto w-[90%] md:w-[95%] flex flex-col space-y-12">
        <div className="text-left ">
          <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font-semibold ">
            Join our team
          </h2>
          <p className="text-lg font-['Exo'] leading-relaxed max-w-xl">
            Our philosophy is simple hire a team of diverse, passionate
            individuals and foster a culture that empowers you to do your best
            work.
          </p>
        </div>

        {/* Cards from Array */}
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 ">
          {careersData.map((job, index) => (
            <div
              key={index}
              className="bg-[#101820] text-white px-6 md:px-8 py-10 rounded-[25px]"
            >
              <div className="flex items-center justify-center bg-[#132d29] w-fit rounded-[20px] px-2 py-1">
                <span className="text-green text-xs xl:text-lg font-semibold px-2 py-1 rounded">
                  {job.category}
                </span>
              </div>
              <h2 className="text-[29px] md:text-[30px] xl:text-[40px] leading-[30px] md:leading-[50px] font-bold mt-5 md:mt-10">
                {job.title}
              </h2>
              <p className="2xl:text-2xl text-[13px] md:text-base font-['Exo'] leading-relaxed py-3 text-white">
                {job.description}
              </p>
              <div className="mt-4 flex items-center gap-5 ">
                <span className="mr-2 flex items-center font-light gap-2 text-[15px] md:text-[20px]">
                  <MapPin size={20} /> {job.location}
                </span>
                <span className="flex items-center font-light gap-2 text-[15px] md:text-[20px]">
                  <Clock3 size={20} /> {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-left ">
          <h2 className="text-[30px] md:text-[50px] font-['Asgard'] font-semibold ">
            Life at LPS Brands
          </h2>
          <p className="text-[15px] md:text-lg font-['Exo'] leading-relaxed max-w-xl">
            At LPS Brands, we believe in building a workplace where innovation,
            creativity, and collaboration thrive. Our team is made up of
            diverse, passionate individuals, and we are committed to providing a
            supportive environment that allows you to grow and excel.
          </p>
        </div>
      </div>
    </div>
  );
}
