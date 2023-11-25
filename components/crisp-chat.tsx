"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("092b0e24-66b1-46d0-b660-6dcf10505051");
  }, []);

  return null;
};
