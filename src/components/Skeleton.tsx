/**
 * @module Skeleton
 */

import { FC, memo } from 'react';

/**
 * Defines the properties for the Skeleton component.
 *
 * @typedef {Object} Props
 * @property {('pulse' | 'wave' | 'flash')} [animation] - Specifies the animation type for the skeleton. Default is 'wave'.
 * @property {('circle' | 'rectangle' | 'round')} [shape] - Specifies the shape type for the skeleton. Default is 'round'.
 * @property {string} [className] - Additional CSS class names to apply to the skeleton.
 */
type Props = {
  animation?: 'pulse' | 'wave' | 'flash';
  shape?: 'circle' | 'rectangle' | 'round';
  className?: string;
};

const ANIMATIONS: Record<NonNullable<Props['animation']>, string> = {
  pulse: 'animate-pulse dark:bg-zinc-700 bg-zinc-300',
  flash:
    'animate-flash bg-[length:200%_100%] bg-gradient-to-r dark:from-zinc-600 dark:via-zinc-700 dark:to-zinc-600 from-zinc-300 via-zinc-200 to-zinc-300',
  wave: [
    'dark:bg-zinc-700/60 bg-zinc-300 relative overflow-hidden before:content-[""] before:absolute before:top-0 before:left-[-150%] before:w-[150%] before:h-full',
    'before:bg-gradient-to-r before:from-transparent dark:before:via-zinc-600 before:via-zinc-400/50 before:to-transparent before:animate-wave',
  ].join(' '),
};

const SHAPES: Record<NonNullable<Props['shape']>, string> = {
  circle: 'rounded-full',
  round: 'rounded-lg',
  rectangle: 'rounded-none',
};

/**
 * Renders a skeleton UI element with optional animations and shape types.
 *
 * @param {Props} props - The properties for the Skeleton component.
 * @returns {React.ReactElement} The rendered Skeleton component.
 */
const Skeleton: FC<Props> = ({
  animation = 'wave',
  shape = 'round',
  className = '',
}) => {
  const styles = [ANIMATIONS[animation], SHAPES[shape], className]
    .join(' ')
    .trim();

  return <div className={styles}></div>;
};

export default memo(Skeleton);
