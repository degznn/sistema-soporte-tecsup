import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-soporte-orange text-white hover:bg-soporte-dark',
    secondary: 'bg-soporte-ink text-white hover:bg-neutral-800',
    outline: 'border border-neutral-300 bg-white text-neutral-700 hover:border-soporte-orange hover:text-soporte-dark',
  };
  return <button className={cn('rounded-lg px-4 py-2 text-sm font-semibold transition-colors', variants[variant], className)} {...props} />;
}
