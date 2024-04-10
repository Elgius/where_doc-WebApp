import { useRouter } from "next/router";

export default function DoctorPage() {
  const router = useRouter();
  // const { name } = router.query;

  return <div>Doctor: {router.query.name}</div>;
}

// this no work
