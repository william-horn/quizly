"use client";

import { useRef, useState } from "react";
import emptyFunc from "@/lib/util/defaultFunctions";
import isClient from "@/lib/util/isClient";

export const useLocalStorageRequest = (key, value) => {
  if (!isClient()) return [emptyFunc, emptyFunc];

  let dataRef = useRef(value);
  const saved = JSON.parse(localStorage.getItem(key));

  if (saved) {
    dataRef.current = saved;
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const updater = (update) => {
    let value;

    if (typeof update == "function") {
      value = update(dataRef.current);
    } else {
      value = update;
    }

    localStorage.setItem(key, JSON.stringify(value));
    dataRef.current = value;
  };

  const getter = (domain) => {
    if (domain) {
      return dataRef.current[domain] || [];
    } else {
      return dataRef.current;
    }
  };

  return [getter, updater];
};

export const useLocalStorageState = (key, value) => {
  if (!isClient()) return [emptyFunc, emptyFunc];

  const saved = JSON.parse(localStorage.getItem(key));
  const [savedData, setSavedData] = useState(saved || value);

  if (!saved) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const updater = (update) => {
    setSavedData((prev) => {
      let value;

      if (typeof update == "function") {
        value = update(prev);
      } else {
        value = update;
      }

      localStorage.setItem(key, JSON.stringify(value));
      return value;
    });
  };

  const getter = (domain) => {
    if (domain) {
      return savedData[domain] || [];
    } else {
      return savedData;
    }
  };

  return [getter, updater];
};
