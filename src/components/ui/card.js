import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }) {
  return <section className={cn('rounded-2xl border border-neutral-200 bg-white shadow-soft', className)} {...props} />;
}
