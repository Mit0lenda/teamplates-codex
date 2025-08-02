'use client';

export default function SocialShare({ url }: { url: string }) {
  return (
    <div className="flex gap-2 mt-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary"
      >
        Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary"
      >
        Instagram
      </a>
    </div>
  );
}
