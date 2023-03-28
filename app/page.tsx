/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Link from "next/link"

import { BaseURL, GetFullList } from "@/lib/pocketbase"

const fetchData = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/designs/records/"
  )
  const results = await res.json()
  return results
}

export default async function HomePage() {
  const data = await fetchData()
  return (
    <>
      <div className="max-w-[98rem] my-12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.items.map((record) => {
          return (
            <div key={record.id}>
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img
                    src={`${BaseURL}/api/files/${record.collectionId}/${record.id}/${record.bg_image}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{record.name}</h2>

                  <p>Number of Items: {record.images.length}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/walls/${record.id}`}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
