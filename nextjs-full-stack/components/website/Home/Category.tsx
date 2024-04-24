import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <section className="py-6">
      <h3 className="text-2xl font-semibold mb-4">All Category</h3>
      <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8">
        {/* this map should be all category */}
        {[1, 24, , 5, 6, 6, 7, 7, 7, 1, 24, , 5, 6, 6, 7, 7, 7].map(
          (item, idx) => {
            return (
              <Link key={idx} href={`category/${idx}`}>
                <div className=" border mx-auto text-center hover:shadow-xl cursor-pointer p-3">
                  <Image
                    width={0}
                    height={0}
                    src="/pos_software.png"
                    alt="Category Image"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", padding: "15px" }}
                  />
                  <p>Category name</p>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
}
