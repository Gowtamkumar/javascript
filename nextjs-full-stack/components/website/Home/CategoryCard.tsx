import Image from "next/image";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        {/* Display categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Category Card: */}
          {[2, 4, 7, 8].map((item, idx) => (
            <Link key={idx} href={`category/${idx}`}>
              <div className="bg-white rounded-lg shadow-md p-4">
                <Image
                  // placeholder="blur"
                  width={150}
                  height={150}
                  src="/product-02.jpg"
                  alt="Category Image"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryCard;
