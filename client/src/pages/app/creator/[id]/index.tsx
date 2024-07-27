import { useRouter } from 'next/router';

export default function Creator() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <main>
        123
      </main>
    </div>
  );
}
