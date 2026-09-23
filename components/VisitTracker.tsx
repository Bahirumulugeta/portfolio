"use client";

import { useEffect } from "react";
import { notifyPortfolioEvent } from "@/utils/clientMeta";

const VisitTracker = () => {
  useEffect(() => {
    const key = "portfolio-view-notified";
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    notifyPortfolioEvent("view");
  }, []);

  return null;
};

export default VisitTracker;
