'use client';

export type Review = {
  id: number;
  author: string;
  text: string;
  rating: number;
};

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-6 space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="border-b pb-2">
          <p className="font-semibold">{r.author}</p>
          <p className="text-sm">{'★'.repeat(Math.round(r.rating))}</p>
          <p className="text-sm mt-1">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
