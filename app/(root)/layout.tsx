import type { Metadata } from "next";
import Header from "@/components/comen/header";
import HeaderContainer from "@/components/HeaderContainer";

export const metadata: Metadata = {
  title: "Travel Gate",
  description: "We Make Travel Matter",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      {/* <Header /> */}
      <HeaderContainer/>
      {/* <main className="pt-40"> */}
      {children}
      {/* </main> */}
    </>
  );
}
