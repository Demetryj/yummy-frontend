import toast from 'react-hot-toast';

export const NotifyError = message =>
  toast.error(message, {
    duration: 3000,
    position: 'top-center',

    style: {
      textAlign: 'center',
      backgroundColor: ' rgba(255,111,105,0.3)',
      color: 'rgba(5,1,0,0.5)',
      fontSize: '2.5em',
      fontWeight: '900',
    },
    icon: '🤔',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
