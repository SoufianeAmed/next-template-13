/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React from "react"

import { BaseURL, GetFullList, imageUrl } from "@/lib/pocketbase"

type Props = {
  params: {
    slug: string
  }
}
// https://ripe-eventide.pockethost.io//api/collections/wallpapers/records/b23lsh4lv3zl75u/
const fetchData = async (slug: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/designs/records/${slug}/`
  )
  const results = await res.json()
  return results
}
export default async function Page({ params: { slug } }: Props) {
  const data = await fetchData(slug)
  console.log(data.images)
  return (
    <>
      <h1>Welcome to </h1>
      <div className="max-w-[98rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.images.map((image: string, idx) => {
          return (
            <div
              key={idx}
              className="card w-[380px] bg-inherit  dark:bg-slate-900 shadow-lg gap-6 mx-auto dark:shadow-zinc-500 shadow-gray-300 mb-12"
            >
              <figure>
                <img
                  src={`http://127.0.0.1:8090/api/files/4kd0a8jaiqdgm7e/${slug}/${image}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Figure: {idx + 1}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="text-white text-lg btn btn-success dark:btn-primary">
                    Check Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
