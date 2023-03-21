
export default function Testimonial({children}) {
  return (
    <section className="bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-blue-500 ">Testimonials</p>

        <h1 className="mt-2 text-2xl font-semibold capitalize lg:text-3xl text-white">
          What students saying
        </h1>
        {children}
      </div>
    </section>
  );
}
