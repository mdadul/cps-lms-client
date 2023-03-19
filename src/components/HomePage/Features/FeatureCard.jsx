export default function FeatureCard({img, title, description}) {
  return (
    <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
      <div className="relative p-8 space-y-8">
        <img
          src={img}
          className="w-10"
          width="512"
          height="512"
          alt="burger illustration"
        />

        <div className="space-y-2">
          <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
           {title}
          </h5>
          <p className="text-sm text-gray-600">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
}
