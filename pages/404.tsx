import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
      <h1 className="title-not-found">Oooops...</h1>
      <h1 className="title-not-found">
        Halaman yang anda cari tidak ditemukan
      </h1>
    </>
  );
}
