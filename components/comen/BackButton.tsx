"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-3"
      onClick={() => {
        router.back();
      }}
    >
      <FaArrowLeft size={14} />{" "}
      <div className=" text-textcolor1 font-bold">Back to previous page</div>
    </button>
  );
};

export default BackButton;
