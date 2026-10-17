"use client";
import { useEffect, useState } from "react";

export default function OpenBadge() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const h = new Date().getHours();
    setOpen(h >= 7 && h < 19);
  }, []);
  return (
    <div className="badge">
      <span className={`dot ${open ? "open" : ""}`} />
      <span>{open === null ? "Checking hours…" : open ? "Open now, closes at 7 pm" : "Closed, opens at 7 am"}</span>
    </div>
  );
}
