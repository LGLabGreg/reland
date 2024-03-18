'use client';

import { ReactElement, ReactNode } from 'react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';
import { type TypeAnimationProps } from 'react-type-animation/dist/esm/components/TypeAnimation/index.types';

const TypeAnimation = (props: TypeAnimationProps): ReactNode => {
  return <ReactTypeAnimation {...props} />;
};

export default TypeAnimation;
