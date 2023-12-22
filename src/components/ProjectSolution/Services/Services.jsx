const iconRender = (val) => {
  switch (val) {
    case "default-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ title, description, icon, color }) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg space-y-3 hover:scale-105 transition-all duration-500 ">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};
const features = [
  {
    id: 1,
    title: "C/C++ Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-sky-600",
  },
  {
    id: 2,
    title: "EEE Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "Software Developemnt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-rose-600",
  },
  {
    id: 5,
    title: "Microporcessor Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-emerald-600",
  },
  {
    id: 6,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-pink-600",
  },
  {
    id: 7,
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-purple-600",
  },
  {
    id: 8,
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-yellow-600",
  },
  {
    id: 9,
    title: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-red-600",
  },
  {
    id: 10,
    title: "Numerical Methods",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-cyan-600",
  },
  {
    id: 11,
    title: "Computer Graphics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-cyan-600",
  },
  {
    id: 12,
    title: "Computer Networking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-red-600",
  },
  {
    id: 13,
    title: "DBMS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-green-500",
  },
  {
    id: 14,
    title: "Operating System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-sky-500",
  },
  {
    id: 15,
    title: "Custom Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: "default-ico",
    color: "bg-sky-600",
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deserunt culpa autem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
