import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-h-screen h-screen">
      {/* Left side otp verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/MedCare.svg"
            height={1024}
            width={1920}
            alt="patient"
            className="mb-12 h-10 w-fit" />

          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-tems-end text-dark-600 xl:text-left">
              @2024 All Rights Reserved
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image src="/assets/images/onboarding-img.png" height={1000} width={1000} alt="patient" className="side-img max-w-[50%]" />
    </div>
  );
}
