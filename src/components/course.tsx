'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Video from '@/components/ui/video';

import { formatNumber } from '@/lib/utils';
import { type CourseProps } from '@/lib/types';
import Iframe from './ui/iframe';

const Course = ({
  course: { image, instructor, title, numStudents, length, category, dialogMedia, dialogMediaType },
  filter,
}: {
  course: CourseProps;
  filter: string | null;
}) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  if (filter && filter !== category) {
    return null;
  }

  const handleOpenChange = (isOpen: boolean) => {
    setDialogOpen(isOpen);
  };

  return (
    <AnimatePresence key={title}>
      <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="group flex rounded drop-shadow overflow-hidden bg-white hover:bg-grey-background transition-colors"
        >
          <div className="cursor-pointer flex flex-col flex-1" onClick={() => setDialogOpen(true)}>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="relative overflow-hidden bg-cover bg-center h-[164px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-inherit before:bg-cover before:origin-center before:transition-transform group-hover:before:scale-110 pseudo-image-hover"
              key={title}
            ></div>

            <div className="flex flex-col flex-grow py-3 px-3">
              <p className="text-muted text-sm mb-2">{instructor}</p>
              <p className="font-semibold mb-3">{title}</p>
              <div className="flex justify-between items-center mt-auto text-muted text-sm">
                <div>{formatNumber(numStudents)} students</div>
                <div>{length}</div>
              </div>
            </div>
          </div>

          <DialogContent className="sm:max-w-[690px]">
            <DialogHeader>
              <DialogTitle>{instructor}</DialogTitle>
              <DialogDescription>{title}</DialogDescription>
            </DialogHeader>
            <ReactPlayer url={dialogMedia} controls={true} />
          </DialogContent>
        </motion.div>
      </Dialog>
    </AnimatePresence>
  );
};

export default Course;
