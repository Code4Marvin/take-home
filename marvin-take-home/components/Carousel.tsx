"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps, useRef, useState } from "react";
import { Dog } from "@/app/api/dogs/data";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      fetch("/api/dogs").then((res) => res.json()) as Promise<Dog[]>,
  });

  const { mutate } = useMutation({
    mutationKey: ["addComment"],
    mutationFn: (comment) =>
      fetch("/api/dogs", {
        method: "POST",
        body: JSON.stringify(comment),
      }).then((res) => res.json()),
    onSuccess: () => {
      ref.current?.reset();
      queryClient.invalidateQueries({
        queryKey: ["photos"],
      });
    },
  });

  if (data === undefined || isLoading) {
    return <p>Loading...</p>;
  }

  function handleNext() {
    setCurrentImage((currentImage) => {
      if (currentImage === data!.length - 1) {
        return 0;
      }
      return currentImage + 1;
    });
  }

  function handlePrev() {
    setCurrentImage((currentImage) => {
      if (currentImage === 0) {
        return data!.length - 1;
      }
      return currentImage - 1;
    });
  }

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const data = Object.fromEntries(formData);

    mutate(data);
  }

  const imageUrl = data[currentImage].images[0].url;
  const title = data[currentImage].title;
  const comments = data[currentImage].comments;

  return (
    <div className="max-w-5xl mx-auto my-8 bg-white p-6 shadow-lg h-[600px]">
      <div className="grid grid-cols-3 h-full">
        <div className="flex flex-col gap-4 col-span-2">
          <div className="grow relative h-full">
            <img
              className="rounded-lg w-auto h-full object-contain mx-auto"
              alt={title}
              src={imageUrl}
            />
            <button className="absolute top-1/2 left-0 ml-3 -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
              <ChevronLeftIcon
                className="h-6 w-6 text-gray-800"
                onClick={handlePrev}
              />
            </button>
            <button className="absolute top-1/2 right-0 mr-3 -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
              <ChevronRightIcon
                className="h-6 w-6 text-gray-800"
                onClick={handleNext}
              />
            </button>
          </div>
          <p className="text-center text-lg font-semibold">{title}</p>
        </div>
        <div className="ml-4 grid grid-rows-[1fr_auto] h-[552px]">
          <div className="overflow-auto">
            {comments.map((comment) => (
              <>
                <p className="font-bold">{comment.user}</p>
                <p>{comment.text}</p>
              </>
            ))}
          </div>
          <form
            ref={ref}
            className="mt-4 grid grid-cols-[max-content_1fr] items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="idx" value={currentImage} />
            <label className="block text-sm font-bold" htmlFor="user">
              User Name:
            </label>
            <Input id="user" name="user" disabled={isMutating} required />
            <label className="block text-sm font-bold" htmlFor="text">
              Comment:
            </label>
            <Input id="text" name="text" disabled={isMutating} required />
            <input
              hidden
              type="submit"
              value="submit"
              className="bg-gray-800 text-white rounded-md px-4 py-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
