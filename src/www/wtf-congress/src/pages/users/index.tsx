import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  return <p>stories list: {router.query.id}</p>;
}
