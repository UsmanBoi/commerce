'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { createContext, useContext, useMemo, useReducer } from 'react';

type ProductState = {
  [key: string]: string;
} & {
  image?: string;
};

type ProductContextType = {
  state: ProductState;
  updateOption: (name: string, value: string) => void;
  updateImage: (index: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Define an action type for the reducer
type Action =
  | { type: 'UPDATE_OPTION'; name: string; value: string }
  | { type: 'UPDATE_IMAGE'; index: string };

// Create a reducer function to manage state updates
const productReducer = (state: ProductState, action: Action): ProductState => {
  switch (action.type) {
    case 'UPDATE_OPTION':
      return { ...state, [action.name]: action.value };
    case 'UPDATE_IMAGE':
      return { ...state, image: action.index };
    default:
      return state;
  }
};

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const getInitialState = () => {
    const params: ProductState = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  // Use useReducer instead of useOptimistic for clearer state management
  const [state, dispatch] = useReducer(productReducer, getInitialState());

  const updateOption = (name: string, value: string) => {
    dispatch({ type: 'UPDATE_OPTION', name, value });
  };

  const updateImage = (index: string) => {
    dispatch({ type: 'UPDATE_IMAGE', index });
  };

  const value = useMemo(
    () => ({
      state,
      updateOption,
      updateImage
    }),
    [state]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}

export function useUpdateURL() {
  const router = useRouter();

  return (state: ProductState) => {
    const newParams = new URLSearchParams(window.location.search);
    Object.entries(state).forEach(([key, value]) => {
      newParams.set(key, value);
    });
    router.push(`?${newParams.toString()}`, { scroll: false });
  };
}
