import React from 'react';

export default function Yoga() {
  return (
    <section id="yoga" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Yoga Practice
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Certified yoga instructor offering personalized sessions combining traditional practices with modern wellness approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <YogaCard
            title="General Yoga"
            description="Traditional Hatha and Vinyasa flow classes suitable for all levels."
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <YogaCard
            title="Aerial Yoga"
            description="Unique aerial yoga sessions combining traditional poses with hammock support."
            image="https://images.unsplash.com/photo-1734194202795-d4e55c65a787?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}

const YogaCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img className="w-full h-64 object-cover" src={image} alt={title} />
    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity hover:bg-opacity-30">
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  </div>
);