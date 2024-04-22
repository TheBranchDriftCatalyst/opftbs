import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  return <p>stories edit: {router.query.id}</p>;
}
