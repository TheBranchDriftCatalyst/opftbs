import { useRouter } from 'next/router';
export default function Page() {
  const router = useRouter();
  return <p>stories view page: {router.query.id}</p>;
}
