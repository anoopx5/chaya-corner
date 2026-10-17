"use client";
import Image from "next/image";
import { useState } from "react";

// Shows a real photo, or a colored tile with an emoji when there is no photo or it fails to load.
export default function Photo({ src, alt, emoji = "☕", tone = "t1", sizes, priority = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <div className={`photo ${tone} ${className}`}>
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => {
            console.warn("[photo] Image failed to load:", src);
            setFailed(true);
          }}
          style={{ objectFit: "cover" }}
        />
      ) : (
        emoji && <span className="emoji" role="img" aria-label={alt}>{emoji}</span>
      )}
    </div>
  );
}
