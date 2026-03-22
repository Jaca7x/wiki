interface AnimVariantsModalProps {
  offset: number;
}

export const ANIM_VARIANTS_MODAL = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },

  modalOverlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },

  cardModal: {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: 20 },
  },

  cardTitleModal: {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },

  offsetCardModal: {
    hidden: (offset: number) => ({
      x: offset * 240,
      rotateY: offset * -35,
      scale: 0.4,
      opacity: 0,
    }),
    visible: (offset: number) => ({
      x: offset * 240,
      rotateY: offset * -35,
      scale: offset === 0 ? 1 : 0.6,
      opacity: offset === 0 ? 1 : 0.3,
      z: offset === 0 ? 0 : -150,
      transition: {
        type: "spring" as const,
        stiffness: 180,
        damping: 25,
      },
    }),
    exit: (offset: number) => ({
      x: offset * 240,
      opacity: 0,
      scale: 0.4,
    }),
  },

  descCardModal: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },
};
